import { CharacterLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class CharacterLiteralTree extends LiteralTree {
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
