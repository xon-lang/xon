import { DecimalLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class DecimalLiteralTree extends LiteralTree {
    value: string;

    constructor(public ctx: DecimalLiteralContext) {
        super();
        this.value = ctx.DecimalLiteral().text.replace(/_/g, '');
    }

    toPlain() {
        return {
            ...super.toPlain(),
            value: this.value,
        };
    }
}
