import { FunctionContext } from '../../grammar/.antlr/XonParser';
import { ExpressionTree } from '../expression/expression.tree';
import { getExpressionTree } from '../expression/expression-helper';

export class FunctionTree extends ExpressionTree {
    args: {
        name: string;
        type: string;
        value: ExpressionTree;
    }[];

    name: string;
    body: ExpressionTree[];

    constructor(public ctx: FunctionContext) {
        super();
        this.name = ctx.ID().text;
        this.args = ctx.functionArgument().map(x => ({
            type: x._type.text,
            name: x._name.text,
            value: x.expression() && getExpressionTree(x.expression()),
        }));
        this.body = ctx.expression().map(getExpressionTree);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            args: this.args.map(x => ({
                type: x.type,
                name: x.name,
                value: x.value?.toPlain(),
            })),
            body: this.body.map(x => x.toPlain()),
        };
    }
}
