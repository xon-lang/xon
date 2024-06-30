import {Array2, nothing} from '../../../lib/types';
import {AnalyzerDiagnosticManager} from '../../diagnostic/analyzer-diagnostic-manager';
import {TextResource} from '../../util/resource/text/text-resource';
import {TextResourceRange, textResourceRange} from '../../util/resource/text/text-resource-range';
import {Node} from '../node';
import {StatementNode} from '../syntax/statement/statement-node';
import {SyntaxAnalyzer} from '../syntax/syntax-analyzer';
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

  createReference: (node: Node) => TextResourceRange;
  pushDeclarationScope(): void;
  popDeclarationScope(): void;
};

export function createSemanticAnalyzer(
  syntaxAnalyzer: SyntaxAnalyzer,
  semanticConfig?: Partial<SemanticAnalyzerConfig>,
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

    createReference(node: Node): TextResourceRange {
      return textResourceRange(this.syntaxAnalyzer.resource, node.range);
    },

    pushDeclarationScope(): void {
      this.declarationManager = createDeclarationManager(this.declarationManager);
    },

    popDeclarationScope(): void {
      if (this.declarationManager.parent) {
        this.declarationManager = this.declarationManager.parent;
      }
    },
  };

  syntaxImportsParse(semantic);
  syntaxDeclarationsParse(semantic);
  syntaxValuesParse(semantic);

  return semantic;
}
