import {Array2, Nothing, nothing} from '../../../lib/types';
import {
  AnalyzerDiagnosticManager,
  createDiagnosticManager,
} from '../../diagnostic/analyzer-diagnostic-manager';
import {FormatterManager, createFormatterManager} from '../../formatter/formatter-manager';
import {TextResource} from '../../util/resource/text/text-resource';
import {LexicalAnalyzer} from '../lexical/lexical-analyzer';
import {Node} from '../node';
import {StatementNode} from './statement/statement-node';
import {DEFAULT_SYNTAX_PARSER_CONFIG, SyntaxParserConfig} from './syntax-analyzer-config';

type ContextAttributes = 'resource' | 'statements' | 'diagnosticManager' | 'formatterManager';

export type SyntaxResult = Pick<SyntaxContext, ContextAttributes> & {
  syntaxContext: SyntaxContext;
};

export interface SyntaxContext {
  resource: TextResource;
  lexer: LexicalAnalyzer;
  hiddenNodes: Array2<Node>;
  breakNode: Node | Nothing;
  parentStatement: StatementNode | Nothing;
  nodes: Array2<Node>;
  lastStatement: StatementNode | Nothing;
  statements: Array2<StatementNode>;
  diagnosticManager: AnalyzerDiagnosticManager;
  formatterManager: FormatterManager;
  config: SyntaxParserConfig;
}

export function syntaxContext(
  resource: TextResource,
  lexer: LexicalAnalyzer,
  issueManager: AnalyzerDiagnosticManager | Nothing,
  formatterManager: FormatterManager | Nothing,
  config: SyntaxParserConfig | Nothing,
): SyntaxContext {
  return {
    resource,
    lexer,
    hiddenNodes: [],
    parentStatement: nothing,
    nodes: [],
    lastStatement: nothing,
    breakNode: nothing,
    statements: [],
    diagnosticManager: issueManager ?? createDiagnosticManager(resource),
    formatterManager: formatterManager ?? createFormatterManager(resource),
    config: config ?? DEFAULT_SYNTAX_PARSER_CONFIG,
  };
}
