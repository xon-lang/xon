import { DecimalLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class DecimalLiteralTree extends LiteralTree {
    constructor(public ctx: DecimalLiteralContext) {
        super();
        this.value = ctx.DecimalLiteral().text.replace(/_/g, '');
        this.valueType = 'i32';
    }
}
