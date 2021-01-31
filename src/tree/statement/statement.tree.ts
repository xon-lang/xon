import { StatementContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class StatementTree extends BaseTree {
  ctx?: StatementContext;
}
