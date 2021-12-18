import { StatementContext } from '../../grammar/xon-parser';
import { Node } from '../node';

export abstract class StatementNode extends Node {
  abstract ctx: StatementContext;
}
