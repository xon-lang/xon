import {Formatter} from '../formatter/formatter';
import {IssueManager} from '../issue/issue-manager';
import {Source} from '../source/source';
import {StatementNode} from './node/syntax/statement/statement-node';
import {TokenNode} from './node/token/token-node';
import {SyntaxContext} from './syntax-context';

export interface SyntaxResult {
  source: Source;
  hiddenNodes: TokenNode[];
  formatters: Formatter[];
  issueManager: IssueManager;
  statements: StatementNode[];
  syntaxContext: SyntaxContext;
}
