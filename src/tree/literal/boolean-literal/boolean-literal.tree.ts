import { BooleanLiteralContext } from '../../../grammar/xon-parser';
import { LiteralType } from '../literal-type';
import { LiteralTree } from '../literal.tree';

export class BooleanLiteralTree extends LiteralTree {
    isPositive: boolean;

    constructor(public ctx: BooleanLiteralContext) {
        super();
        this.value = ctx.BooleanLiteral().text;
        this.isPositive = this.value == 'true';
        this.valueType = LiteralType.Boolean;
    }
}
