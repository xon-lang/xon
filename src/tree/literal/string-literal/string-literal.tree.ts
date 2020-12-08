import { StringLiteralContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../../type/type.tree';
import { LiteralTree } from '../literal.tree';
import { StrType } from './../../type/primitive/str-type';

export class StringLiteralTree extends LiteralTree {
    constructor(public ctx?: StringLiteralContext) {
        super();
        this.value = ctx?.StringLiteral().text.slice(1, -1).replace(/\\\'/g, "'");
    }

    getType(): TypeTree {
        return StrType.instance;
    }
}
