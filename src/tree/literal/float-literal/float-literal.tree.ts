import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { LiteralType } from '../literal-type';
import { LiteralTree } from '../literal.tree';

export class FloatLiteralTree extends LiteralTree {
    constructor(public ctx: FloatLiteralContext) {
        super();
        this.value = ctx.FloatLiteral().text.replace(/_/g, '');
        this.valueType = LiteralType.Float;
    }
}
