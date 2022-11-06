import { FloatLiteralContext } from '~/grammar/xon-parser';
import { Number2, String2 } from '~/lib/core';
import { LiteralTree } from '~/tree/literal/literal-tree';
import { SourceRange } from '~/util/source-range';

export class FloatLiteralTree extends LiteralTree {
  sourceRange: SourceRange;
  radix: Number2;
  integer: String2;
  fraction: String2;
  value: Number2;

  constructor(ctx: FloatLiteralContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    [this.integer, this.fraction] = ctx.text.split('.');
    const [integer, radix] = this.integer.split('x').reverse();
    this.integer = integer;
    this.radix = Number(radix);

    const integerClean = this.integer.replace(/_/g, '');
    const fraction = this.fraction.replace(/_/g, '');

    this.value = this.radix
      ? parseInt(integerClean, this.radix) +
        parseInt(fraction, this.radix) / this.radix ** fraction.length
      : parseFloat(`${integerClean}.${fraction}`);
  }
}
