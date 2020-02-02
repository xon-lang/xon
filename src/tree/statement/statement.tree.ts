import { StatementContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export class StatementTree extends BaseTree {
    ctx: StatementContext;
}
