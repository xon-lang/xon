import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
    hasElvis: boolean;
    memberName: string;
    object: ExpressionTree;

    constructor(public ctx: MemberExpressionContext) {
        super();
        this.hasElvis = !!ctx.Question();
        this.memberName = ctx.ID().text;
        this.object = getExpressionTree(ctx.expression());
    }
}
