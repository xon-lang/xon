import { Issue } from '../issue/issue';
import { Source } from '../source/source';
import { Node, StatementNode } from '../syntax/node/node';

export interface SemanticContext {
  source: Source;
  hidden: Node[];
  issues: Issue[];
  statements: StatementNode[];
}
