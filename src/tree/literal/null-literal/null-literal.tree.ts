import { NullLiteralContext } from '../../../grammar/xon-parser';
import { createSimpleTreeType } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { LiteralTree } from '../literal.tree';

export class NullLiteralTree extends LiteralTree<null> {
    constructor(public ctx: NullLiteralContext) {
        super();
        this.value = null;
    }

    getType(): TypeTree {
        return createSimpleTreeType('null');
    }
}
