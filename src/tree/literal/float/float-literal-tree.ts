import { FloatLiteralContext } from '~/grammar/xon-parser';
import { Number2, String2 } from '~/lib/core';
import { LiteralTree } from '~/tree/literal/literal-tree';
import { SourceSpan } from '~/util/source/source-span';

export class FloatLiteralTree extends LiteralTree {
  sourceRange: SourceSpan;
  radix: Number2;
  integer: String2;
  fraction: String2;
  value: Number2;

  constructor(ctx: FloatLiteralContext) {
    super();
    this.sourceRange = SourceSpan.fromContext(ctx);
    [this.integer, this.fraction] = ctx.text.split('.');
    const [integer, radix] = this.integer.split('x').reverse();
    this.integer = integer;
    this.radix = Number(radix);

    const integerClean = this.integer.replace(/_/gu, '');
    const fraction = this.fraction.replace(/_/gu, '');

    this.value =
      (this.radix &&
        parseInt(integerClean, this.radix) + parseInt(fraction, this.radix) / this.radix ** fraction.length) ||
      parseFloat(`${integerClean}.${fraction}`);
  }
}
