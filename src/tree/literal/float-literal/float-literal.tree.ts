import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

function customParseFloat(integer: string, fraction: string, radix: number): number {
  if (!radix) return parseFloat(`${integer}.${fraction}`);
  return parseInt(integer, radix) + parseInt(fraction, radix) / radix ** fraction.length;
}

export class FloatLiteralTree extends LiteralTree<number> {
  radix: number;

  integer: string;

  fraction: string;

  constructor(public ctx: FloatLiteralContext) {
    super();
    const text = ctx.FloatLiteral().text.replace(/_/g, '').replace(/x/i, 'x');
    [this.integer, this.fraction] = text.split('.');
    const [integer, radix] = this.integer.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;

    this.value = customParseFloat(this.integer, this.fraction, this.radix);
  }
}
