import { BaseTypes } from '../../../base-types';
import { NullLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class NullLiteralTree extends LiteralTree {
    constructor(public ctx: NullLiteralContext) {
        super();
        this.value = 'null';
    }

    getType() {
        return BaseTypes.Null;
    }
}
