import { InstanceExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../expression.tree';

export class InstanceExpressionTree extends ExpressionTree {
    memberName: string;
    level: number;

    constructor(public ctx: InstanceExpressionContext) {
        super();
        this.memberName = ctx.ID().text;
        this.level = ctx.Ad().length - 1;
    }
}
