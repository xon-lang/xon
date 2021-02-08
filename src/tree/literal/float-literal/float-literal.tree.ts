import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class FloatLiteralTree extends LiteralTree {
  radix: number;

  integer: string;

  fraction: string;

  private value: number;

  constructor(public ctx: FloatLiteralContext) {
    super(ctx);
    const text = ctx.FloatLiteral().text.replace(/x/i, 'x');
    [this.integer, this.fraction] = text.split('.');
    const [integer, radix] = this.integer.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;
  }

  getValue(): number {
    if (typeof this.value !== 'undefined') return this.value;
    const integer = this.integer.replace(/_/g, '');
    const fraction = this.fraction.replace(/_/g, '');

    if (!this.radix) return parseFloat(`${integer}.${fraction}`);
    this.value =
      parseInt(integer, this.radix) +
      parseInt(fraction, this.radix) / this.radix ** fraction.length;
    return this.value;
  }
}
