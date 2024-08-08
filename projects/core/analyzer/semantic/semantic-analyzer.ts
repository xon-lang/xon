import {$, is} from '../../$';
import {Array2, Nothing, nothing} from '../../../lib/types';
import {AnalyzerDiagnosticManager} from '../../diagnostic/analyzer-diagnostic-manager';
import {TextRange} from '../../util/resource/text/text-range';
import {TextResource} from '../../util/resource/text/text-resource';
import {TextResourceRange, textResourceRange} from '../../util/resource/text/text-resource-range';
import {Node} from '../node';
import {StatementNode} from '../syntax/statement/statement-node';
import {SyntaxAnalyzer, syntaxFromResource} from '../syntax/syntax-analyzer';
import {SyntaxAnalyzerConfig} from '../syntax/syntax-analyzer-config';
import {DeclarationManager, createDeclarationManager} from './declaration-manager';
import {syntaxDeclarationsParse} from './node/declaration/declaration-semantic-parser';
import {
  declarationManagerFromImportString,
  syntaxImportsParse,
} from './node/value/import/import-value-semantic-parser';
import {syntaxValuesParse} from './node/value/value-semantic-parser';
import {DEFAULT_SEMANTIC_CONFIG, SemanticAnalyzerConfig} from './semantic-analyzer-config';

export type SemanticAnalyzer = {
  syntaxAnalyzer: SyntaxAnalyzer;
  resource: TextResource;
  config: SemanticAnalyzerConfig;
  diagnosticManager: AnalyzerDiagnosticManager;
  declarationManager: DeclarationManager;
  statements: Array2<StatementNode>;

  reference(node: Node): TextResourceRange;
  reference(range: TextRange): TextResourceRange;
  pushDeclarationScope(): void;
  popDeclarationScope(): void;
  usingDeclarationScope<T>(cb: () => T): T;
};

export function createSemanticAnalyzer(
  syntaxAnalyzer: SyntaxAnalyzer,
  semanticConfig?: Partial<SemanticAnalyzerConfig> | Nothing,
): SemanticAnalyzer {
  const config = {...DEFAULT_SEMANTIC_CONFIG, ...semanticConfig};

  const imports =
    semanticConfig?.defaultImports?.filterMap((x) => declarationManagerFromImportString(x)) ?? [];

  const declarationManager = createDeclarationManager(nothing, imports);

  const semantic: SemanticAnalyzer = {
    syntaxAnalyzer: syntaxAnalyzer,
    resource: syntaxAnalyzer.resource,
    diagnosticManager: syntaxAnalyzer.diagnosticManager,
    statements: syntaxAnalyzer.statements,
    declarationManager,
    config,

    reference(nodeOrRange: Node | TextRange): TextResourceRange {
      if (is(nodeOrRange, $.TextRange)) {
        return textResourceRange(this.syntaxAnalyzer.resource, nodeOrRange);
      }

      return textResourceRange(this.syntaxAnalyzer.resource, nodeOrRange.range);
    },

    pushDeclarationScope(): void {
      this.declarationManager = createDeclarationManager(this.declarationManager);
    },

    popDeclarationScope(): void {
      if (this.declarationManager.parent) {
        this.declarationManager = this.declarationManager.parent;
      }
    },

    usingDeclarationScope<T>(cb: () => T): T {
      this.pushDeclarationScope();
      const result = cb();
      this.popDeclarationScope();

      return result;
    },
  };

  syntaxImportsParse(semantic);
  syntaxDeclarationsParse(semantic);
  syntaxValuesParse(semantic);

  return semantic;
}

export function semanticFromResource(
  resource: TextResource,
  syntaxConfig?: Partial<SyntaxAnalyzerConfig> | Nothing,
  semanticConfig?: Partial<SemanticAnalyzerConfig> | Nothing,
): SemanticAnalyzer {
  const syntaxAnalyzer = syntaxFromResource(resource, syntaxConfig);
  const semanticAnalyzer = createSemanticAnalyzer(syntaxAnalyzer, semanticConfig);

  return semanticAnalyzer;
}
