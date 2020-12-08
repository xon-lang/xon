import { NullLiteralContext } from '../../../grammar/xon-parser';
import { NullType } from '../../type/primitive/null-type';
import { TypeTree } from '../../type/type.tree';
import { LiteralTree } from '../literal.tree';

export class NullLiteralTree extends LiteralTree {
    constructor(public ctx: NullLiteralContext) {
        super();
        this.value = 'null';
    }

    getType(): TypeTree {
        return NullType.instance;
    }
}
