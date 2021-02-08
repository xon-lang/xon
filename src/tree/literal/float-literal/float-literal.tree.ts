import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

function customParseFloat(str: string, radix: number): number {
  if (!radix) return parseFloat(str);

  const parts = str.split('.');
  if (parts.length > 1) {
    return parseInt(parts[0], radix) + parseInt(parts[1], radix) / radix ** parts[1].length;
  }
  return parseInt(parts[0], radix);
}

export class FloatLiteralTree extends LiteralTree<number> {
  bitsCount: number;

  base: string;

  integerValue: string;

  fractionValue: string;

  constructor(public ctx: FloatLiteralContext) {
    super();
    let strValue = ctx.FloatLiteral().text.replace(/_/g, '');

    if (strValue.includes('x')) {
      const split = strValue.split('x');
      [this.base, strValue] = split;
    }

    const split = strValue.split('.');
    [this.integerValue, this.fractionValue] = split;
    this.bitsCount = (+this.integerValue).toString(2).length;

    if (split.length) {
      this.value = customParseFloat(strValue, +this.base);
    } else {
      this.value = +strValue;
    }
  }
}
