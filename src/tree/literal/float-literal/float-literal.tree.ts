import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class FloatLiteralTree extends LiteralTree {
  public radix: number;

  public integer: string;

  public fraction: string;

  public value: number;

  public constructor(public ctx: FloatLiteralContext) {
    super();
    [this.integer, this.fraction] = ctx.FloatLiteral().text.split('.');
    const [integer, radix] = this.integer.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;

    const integerClean = this.integer.replace(/_/g, '');
    const fraction = this.fraction.replace(/_/g, '');

    this.value = this.radix
      ? parseInt(integerClean, this.radix) +
        parseInt(fraction, this.radix) / this.radix ** fraction.length
      : parseFloat(`${integerClean}.${fraction}`);
  }
}
