import { BaseTypes } from '../../../base-types';
import { NumberLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class NumberLiteralTree extends LiteralTree {
    constructor(public ctx: NumberLiteralContext) {
        super();
        this.value = +ctx.NumberLiteral().text.replace(/_/g, '');
    }

    getType() {
        return BaseTypes.Number;
    }
}
