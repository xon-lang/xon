import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { getLiteralTree } from '../../literal/literal-helper';
import { LiteralTree } from '../../literal/literal.tree';
import { TypeTree } from '../../type/type.tree';
import { ExpressionTree } from '../expression.tree';

export class LiteralExpressionTree extends ExpressionTree {
    literal: LiteralTree;

    constructor(public ctx?: LiteralExpressionContext) {
        super();
        this.literal = ctx && getLiteralTree(ctx.literal());
    }

    getType(): TypeTree {
        return this.literal.getType();
    }

    toPlain() {
        return {
            ...super.toPlain(),
            literal: this.literal.toPlain(),
        };
    }
}
