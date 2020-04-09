import { NullLiteralContext } from '../../../grammar/xon-parser';
import { LiteralType } from '../literal-type';
import { LiteralTree } from '../literal.tree';

export class NullLiteralTree extends LiteralTree {
    constructor(public ctx: NullLiteralContext) {
        super();
        this.value = 0; // ctx.NullLiteral().text;
        this.type = LiteralType.Null;
    }
}
