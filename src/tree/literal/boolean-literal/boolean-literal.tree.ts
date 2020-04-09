import { BooleanLiteralContext } from '../../../grammar/xon-parser';
import { LiteralType } from '../literal-type';
import { LiteralTree } from '../literal.tree';

export class BooleanLiteralTree extends LiteralTree {
    isPositive: boolean;

    constructor(public ctx: BooleanLiteralContext) {
        super();
        this.isPositive = ctx.text == 'true';
        this.value = this.isPositive; // ctx.BooleanLiteral().text;
        this.type = LiteralType.Boolean;
    }
}
