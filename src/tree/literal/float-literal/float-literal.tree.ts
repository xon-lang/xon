import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { createSimpleTreeType } from '../../type/type-helper';
import { LiteralTree } from '../literal.tree';

export class FloatLiteralTree extends LiteralTree {
    constructor(public ctx: FloatLiteralContext) {
        super();
        this.value = +ctx.FloatLiteral().text.replace(/_/g, '');
        this.type = createSimpleTreeType('float');
    }
}
