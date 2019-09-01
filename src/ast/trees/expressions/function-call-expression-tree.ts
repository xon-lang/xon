import { FunctionCallContext, FunctionCallExpressionContext } from '../../../grammar/generated/XonParser';
import { ExpressionTree } from '../expression-tree';

export class FunctionCallExpressionTree {
    name: string;
    arguments: ExpressionTree[];

    constructor(public ctx: FunctionCallExpressionContext) {
        this.name = ctx.functionCall()._name.text;
        this.arguments = ctx.functionCall()._args.map(x => new ExpressionTree(x));
    }

    toPlane() {
        const o = {
            name: this.name,
            arguments: this.arguments.map(x => x.toPlane()),
        };
        return o;
    }
}
