import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MemberExpressionTree extends ExpressionTree {
    hasElvis: boolean;
    name: string;
    object: ExpressionTree;

    constructor(public ctx: MemberExpressionContext) {
        super();
        this.hasElvis = !!ctx.QuestionMark();
        this.name = ctx.ID().text;
        this.object = getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            hasElvis: this.hasElvis,
            name: this.name,
            object: this.object.toPlain(),
        };
    }
}
