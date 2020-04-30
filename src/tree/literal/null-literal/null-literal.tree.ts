import { NullLiteralContext } from '../../../grammar/xon-parser';
import { createSimpleTreeType } from '../../type/type-helper';
import { LiteralTree } from '../literal.tree';

export class NullLiteralTree extends LiteralTree {
    constructor(public ctx: NullLiteralContext) {
        super();
        this.value = 0; // ctx.NullLiteral().text;
        this.type = createSimpleTreeType('null');
    }
}
