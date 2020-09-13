import { NumberLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class NumberLiteralTree extends LiteralTree {
    bitsCount: number;
    base: number;
    integerValue: string;
    fractionValue: string;

    constructor(public ctx: NumberLiteralContext) {
        super();
        let strValue = ctx.NumberLiteral().text.replace(/_/g, '');

        if (strValue.includes('x')) {
            const split = strValue.split('x');
            this.base = +split[0];
            strValue = split[1];
        }

        const split = strValue.split('.');
        this.integerValue = split[0];
        this.fractionValue = split[1];
        this.bitsCount = (+this.integerValue).toString(2).length;

        if (split.length) {
            this.value = this.parseFloat(strValue, this.base);
        } else {
            this.value = +strValue;
        }
    }

    private parseFloat(str, radix) {
        if (!radix) return parseFloat(str);

        var parts = str.split('.');
        if (parts.length > 1) {
            return (
                parseInt(parts[0], radix) +
                parseInt(parts[1], radix) / Math.pow(radix, parts[1].length)
            );
        }
        return parseInt(parts[0], radix);
    }
}
