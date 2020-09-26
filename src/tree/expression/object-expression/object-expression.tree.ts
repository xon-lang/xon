import { ObjectExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';
import { FunctionExpressionTree } from '../function-expression/function-expression.tree';
import { StringLiteralTree } from './../../literal/string-literal/string-literal.tree';
import { IdExpressionTree } from './../id-expression/id-expression.tree';
import { LiteralExpressionTree } from './../literal-expression/literal-expression.tree';

export class ObjectExpressionTree extends ExpressionTree {
    items: { value: ExpressionTree; key: ExpressionTree; hasSpread: boolean }[];

    constructor(public ctx?: ObjectExpressionContext) {
        super();
        if (!ctx) return;
        this.items = ctx
            .objectItem()
            .map((x) => ({
                item: x,
                value: getExpressionTree(x.spreadItem()?.expression() || x._exprVal),
                key:
                    (x._exprkey && getExpressionTree(x._exprkey)) ||
                    (x.ID() && this.getKeyByString(x.ID().text)),
                hasSpread: !!x.spreadItem()?.Elipsis(),
            }))
            .map((x, i) => ({
                value: x.value,
                key: x.hasSpread ? undefined : x.key || this.getKeyByValueExpression(x.value),
                hasSpread: x.hasSpread,
            }));
    }

    getKeyByString(name: string) {
        const stringLiteral = new StringLiteralTree();
        stringLiteral.value = name;
        const literalExpression = new LiteralExpressionTree();
        literalExpression.literal = stringLiteral;
        return literalExpression;
    }

    getKeyByValueExpression(tree: ExpressionTree) {
        if (tree instanceof IdExpressionTree) return this.getKeyByString(tree.name);
        if (tree instanceof FunctionExpressionTree && tree.object instanceof IdExpressionTree)
            return this.getKeyByString(tree.object.name);
        return this.getKeyByString(tree.ctx.text);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            items: this.items.map((x) => ({
                value: x.value.toPlain(),
                key: x.key?.toPlain(),
                hasSpread: x.hasSpread,
            })),
        };
    }
}
