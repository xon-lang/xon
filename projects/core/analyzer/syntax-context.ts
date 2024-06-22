import {Array2, Nothing, nothing} from '../../lib/types';
import {FormatterManager, createFormatterManager} from '../formatter/formatter-manager';
import {IssueManager, createIssueManager} from '../issue/issue-manager';
import {TextResource} from '../util/resource/text/text-resource';
import {LexicalAnalyzer} from './lexical/lexical-analyzer';
import {LexicalNode} from './lexical/node/lexical-node';
import {DEFAULT_SYNTAX_PARSER_CONFIG, SyntaxParserConfig} from './syntax-analyzer-config';
import {Node} from './syntax/node';
import {StatementNode} from './syntax/statement/statement-node';

type ContextAttributes = 'resource' | 'statements' | 'issueManager' | 'formatterManager';

export type SyntaxResult = Pick<SyntaxContext, ContextAttributes> & {
  syntaxContext: SyntaxContext;
};

export interface SyntaxContext {
  resource: TextResource;
  lexer: LexicalAnalyzer;
  hiddenNodes: Array2<LexicalNode>;
  breakNode: Node | Nothing;
  parentStatement: StatementNode | Nothing;
  nodes: Array2<Node>;
  lastStatement: StatementNode | Nothing;
  statements: Array2<StatementNode>;
  issueManager: IssueManager;
  formatterManager: FormatterManager;
  config: SyntaxParserConfig;
}

export function syntaxContext(
  resource: TextResource,
  lexer: LexicalAnalyzer,
  issueManager: IssueManager | Nothing,
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
    issueManager: issueManager ?? createIssueManager(resource),
    formatterManager: formatterManager ?? createFormatterManager(resource),
    config: config ?? DEFAULT_SYNTAX_PARSER_CONFIG,
  };
}
