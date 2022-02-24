import { StatementContext } from '../../grammar/xon-parser';
import { StatementTree } from '../../tree/statement/statement-tree';
import { Node } from '../node';

export class StatementNode extends Node {
  context: StatementContext;
  tree: StatementTree;
}
