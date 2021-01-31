import { StringLiteralContext } from '../../../grammar/xon-parser';
import { createSimpleTreeType } from '../../type/type-helper';
import { TypeTree } from '../../type/type.tree';
import { LiteralTree } from '../literal.tree';

export class StringLiteralTree extends LiteralTree<string> {
    constructor(public ctx?: StringLiteralContext) {
        super();
        this.value = ctx?.StringLiteral().text.slice(1, -1).replace(/\\'/g, "'");
    }

    getType(): TypeTree {
        return createSimpleTreeType('str');
    }
}
