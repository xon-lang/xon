import { StringLiteralContext } from '../../../grammar/xon-parser';
import { LiteralType } from '../literal-type';
import { LiteralTree } from '../literal.tree';

export class StringLiteralTree extends LiteralTree {
    constructor(public ctx: StringLiteralContext) {
        super();
        this.value = ctx.StringLiteral().text.slice(1, -1);
        this.valueType = LiteralType.String;
    }
}
