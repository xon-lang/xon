import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { LiteralNode } from '../literal-node';

export class FloatLiteralNode extends LiteralNode {
  radix: number;
  integer: string;
  fraction: string;
  value: number;

  constructor(public ctx: FloatLiteralContext) {
    super();

    [this.integer, this.fraction] = ctx.text.split('.');
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

  toString(): string {
    return `${this.value}`;
  }
}
