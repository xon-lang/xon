import { DecimalLiteralContext } from '../../../grammar/xon-parser';
import { createSimpleTreeType } from '../../type/type-helper';
import { LiteralTree } from '../literal.tree';

export class DecimalLiteralTree extends LiteralTree {
    constructor(public ctx: DecimalLiteralContext) {
        super();
        this.value = +ctx.DecimalLiteral().text.replace(/_/g, '');
        this.type = createSimpleTreeType('num');
    }
}
