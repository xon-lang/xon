import { IssueManager } from '../issue/issue-manager';
import { Source } from '../source/source';
import { Node } from './node/node';
import { StatementNode } from './node/statement/statement-node';
import { SyntaxConfig } from './syntax-config';
import { SyntaxContext } from './syntax-context';

export interface SyntaxResult {
  source: Source;
  hidden: Node[];
  issueManager: IssueManager;
  statements: StatementNode[];
  config: SyntaxConfig;
  syntaxContext: SyntaxContext;
}
