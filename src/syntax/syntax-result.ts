import { Issue } from '../issue/issue';
import { Source } from '../source/source';
import { Node } from './node/node';
import { StatementNode } from './node/statement/statement-node';
import { SyntaxConfig } from './syntax-config';
import { SyntaxContext } from './syntax-context';

export interface SyntaxResult {
  source: Source;
  hidden: Node[];
  issues: Issue[];
  statements: StatementNode[];
  config: SyntaxConfig;
  syntaxContext: SyntaxContext;
}
