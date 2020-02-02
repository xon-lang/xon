import { BooleanLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class BooleanLiteralTree extends LiteralTree {

    constructor(public ctx: BooleanLiteralContext) {
        super();
        this.value = ctx.BooleanLiteral().text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
