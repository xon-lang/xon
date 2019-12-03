import { CharacterLiteralContext } from '../../grammar/.antlr/XonParser';
import { BaseTree } from '../base.tree';

export class CharacterLiteralTree extends BaseTree {
    value: string;

    constructor(public ctx: CharacterLiteralContext) {
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
