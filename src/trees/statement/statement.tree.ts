import { StatementContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class StatementTree extends BaseTree {
    ctx: StatementContext;
    constructor() {
        super();
    }
}
