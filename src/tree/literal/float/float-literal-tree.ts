import { FloatLiteralContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../literal-tree';

export class FloatLiteralTree implements LiteralTree {
  sourceRange: SourceRange;
  radix: number;
  integer: string;
  fraction: string;
  value: number;

  constructor(ctx: FloatLiteralContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
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
}
