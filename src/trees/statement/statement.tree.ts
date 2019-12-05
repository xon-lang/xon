import { StatementContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class StatementTree extends BaseTree {

    constructor(public ctx: StatementContext) {
        super();
    }

}
