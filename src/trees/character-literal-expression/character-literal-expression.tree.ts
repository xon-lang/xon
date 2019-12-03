import { CharacterLiteralExpressionContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class CharacterLiteralExpressionTree extends BaseTree {
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
