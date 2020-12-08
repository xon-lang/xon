import { BooleanLiteralContext } from '../../../grammar/xon-parser';
import { BoolType } from '../../type/primitive/bool-type';
import { TypeTree } from '../../type/type.tree';
import { LiteralTree } from '../literal.tree';

export class BooleanLiteralTree extends LiteralTree {
    isPositive: boolean;

    constructor(public ctx: BooleanLiteralContext) {
        super();
        this.isPositive = ctx.text == 'true';
        this.value = this.isPositive;
    }

    getType(): TypeTree {
        return BoolType.instance;
    }
}
