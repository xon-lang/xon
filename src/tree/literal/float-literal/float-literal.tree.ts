import { BaseTypes } from '../../../base-types';
import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class FloatLiteralTree extends LiteralTree {
    constructor(public ctx: FloatLiteralContext) {
        super();
        this.value = +ctx.FloatLiteral().text.replace(/_/g, '');
    }

    getType() {
        return BaseTypes.Float;
    }
}
