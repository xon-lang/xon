import { BaseTypes } from '../../../base-types';
import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { createFunctionTreeType } from '../../type/type-helper';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
    args: string[];
    body: ExpressionTree;

    constructor(public ctx: LambdaExpressionContext) {
        super();
        this.args = ctx.ID().map((x) => x.text);
        this.body = getExpressionTree(ctx.expression());
    }

    getType() {
        return createFunctionTreeType(
            this.args.map((x) => BaseTypes.Any),
            BaseTypes.Any
        );
    }

    toPlain() {
        return {
            ...super.toPlain(),
            args: this.args,
            body: this.body.toPlain(),
        };
    }
}
