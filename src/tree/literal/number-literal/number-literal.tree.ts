import { BaseTypes } from '../../../base-types';
import { NumberLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class NumberLiteralTree extends LiteralTree {
    bitsCount: number;
    integerValue: number;
    fractionValue: number;

    constructor(public ctx: NumberLiteralContext) {
        super();
        
        const strValue = ctx.NumberLiteral().text.replace(/_/g, '');
        this.value = +strValue;
        this.bitsCount = this.value.toString(2).length;
        
        const split = strValue.split('.');
        this.integerValue = +split[0];
        this.integerValue = +split[1];
    }

    getType() {
        return BaseTypes.Number;
    }
}
