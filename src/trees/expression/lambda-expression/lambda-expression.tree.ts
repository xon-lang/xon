import { LambdaExpressionContext } from '../../../grammar/.antlr/XonParser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
    args: string[];
    body: ExpressionTree;

    constructor(public ctx: LambdaExpressionContext) {
        super();
        this.args = ctx.ID().map(x => x.text);
        this.body = getExpressionTree(ctx.expression());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            args: this.args,
            body: this.body.toPlain(),
        };
    }
}
