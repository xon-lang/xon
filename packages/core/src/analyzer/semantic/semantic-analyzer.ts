import {Nothing, nothing, TextResource} from '#common';
import {
  AnalyzerDiagnosticManager,
  createDeclarationScope,
  declarationManagerFromImportString,
  DeclarationScope,
  DEFAULT_SEMANTIC_CONFIG,
  SemanticAnalyzerConfig,
  StatementNode,
  statementsParse,
  SyntaxAnalyzer,
  SyntaxAnalyzerConfig,
  syntaxFromResource,
} from '#core';

export type SemanticAnalyzer = {
  syntaxAnalyzer: SyntaxAnalyzer;
  resource: TextResource;
  config: SemanticAnalyzerConfig;
  diagnosticManager: AnalyzerDiagnosticManager;
  declarationManager: DeclarationScope;
  statements: StatementNode[];

  pushDeclarationScope(): void;
  popDeclarationScope(): void;
};

export function createSemanticAnalyzer(
  syntaxAnalyzer: SyntaxAnalyzer,
  semanticConfig?: Partial<SemanticAnalyzerConfig> | Nothing,
): SemanticAnalyzer {
  const config = {...DEFAULT_SEMANTIC_CONFIG, ...semanticConfig};

  const imports =
    semanticConfig?.defaultImports?.filterMap((x) => declarationManagerFromImportString(x)) ?? [];

  // todo fix it
  const dummyDeclarationManager = {} as DeclarationScope;

  const semanticAnalyzer: SemanticAnalyzer = {
    syntaxAnalyzer: syntaxAnalyzer,
    resource: syntaxAnalyzer.resource,
    diagnosticManager: syntaxAnalyzer.diagnosticManager,
    statements: syntaxAnalyzer.statements,
    declarationManager: dummyDeclarationManager,
    config,

    pushDeclarationScope(): void {
      this.declarationManager = createDeclarationScope(this, this.declarationManager);
    },

    popDeclarationScope(): void {
      if (this.declarationManager.parent) {
        this.declarationManager = this.declarationManager.parent;
      } else {
        throw new Error('Not implemented');
      }
    },
  };

  // todo fix it
  semanticAnalyzer.declarationManager = createDeclarationScope(semanticAnalyzer, nothing, imports);

  statementsParse(semanticAnalyzer, semanticAnalyzer.statements);

  return semanticAnalyzer;
}

export function semanticFromResource(
  resource: TextResource,
  syntaxConfig?: Partial<SyntaxAnalyzerConfig> | Nothing,
  semanticConfig?: Partial<SemanticAnalyzerConfig> | Nothing,
): SemanticAnalyzer {
  const syntaxAnalyzer = syntaxFromResource(resource, syntaxConfig);

  return createSemanticAnalyzer(syntaxAnalyzer, semanticConfig);
}
