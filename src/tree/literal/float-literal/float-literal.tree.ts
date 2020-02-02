import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class FloatLiteralTree extends LiteralTree {
    value: string;

    constructor(public ctx: FloatLiteralContext) {
        super();
        this.value = ctx.FloatLiteral().text.replace(/_/g, '');
    }

    toPlain() {
        return {
            type: 'FloatLiteral',
            value: this.value,
        };
    }
}
