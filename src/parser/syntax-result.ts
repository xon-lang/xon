import { IssueManager } from '../issue/issue-manager';
import { Source } from '../source/source';
import { Node } from './node/node';
import { StatementNode } from './node/syntax/statement/statement-node';
import { SyntaxContext } from './syntax-context';

export interface SyntaxResult {
  source: Source;
  hiddenNodes: Node[];
  unknownNodes: Node[];
  issueManager: IssueManager;
  statements: StatementNode[];
  syntaxContext: SyntaxContext;
}
