import { StringLiteralContext } from '../../../grammar/xon-parser';
import { createSimpleTreeType } from '../../type/type-helper';
import { LiteralTree } from '../literal.tree';

export class StringLiteralTree extends LiteralTree {
    constructor(public ctx: StringLiteralContext) {
        super();
        this.value = ctx.StringLiteral().text.slice(1, -1).replace(/\\\'/g, "'");
        this.type = createSimpleTreeType('String');
    }
}
