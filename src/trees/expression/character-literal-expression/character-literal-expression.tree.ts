import { CharacterLiteralExpressionContext } from '../../../grammar/.antlr/XonParser';
import { BaseTree } from '../../base.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

export class CharacterLiteralExpressionTree extends ExpressionTree {
    value: string;

    constructor(public ctx: CharacterLiteralExpressionContext) {
        super();
        this.value = ctx.CharacterLiteral().text.slice(1, -1);
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
