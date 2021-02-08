import { IntegerLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

function customParseFloat(str: string, radix: number): number {
  if (!radix) return parseFloat(str);

  const parts = str.split('.');
  if (parts.length > 1) {
    return parseInt(parts[0], radix) + parseInt(parts[1], radix) / radix ** parts[1].length;
  }
  return parseInt(parts[0], radix);
}

export class IntegerLiteralTree extends LiteralTree<number> {
  bitsCount: number;

  base: string;

  integerValue: string;

  constructor(public ctx: IntegerLiteralContext) {
    super();
    this.integerValue = ctx.IntegerLiteral().text.replace(/_/g, '');

    if (this.integerValue.includes('x')) {
      const split = this.integerValue.split('x');
      [this.base, this.integerValue] = split;
    }

    this.bitsCount = (+this.integerValue).toString(2).length;

    if (this.base) {
      this.value = customParseFloat(this.integerValue, +this.base);
    } else {
      this.value = +this.integerValue;
    }
  }
}
