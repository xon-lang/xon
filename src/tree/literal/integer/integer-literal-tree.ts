import { IntegerLiteralContext } from '~/grammar/xon-parser';
import { Number2, String2 } from '~/lib/core';
import { LiteralTree } from '~/tree/literal/literal-tree';
import { SourceSpan } from '~/util/source/source-span';

export class IntegerLiteralTree extends LiteralTree {
  sourceRange: SourceSpan;
  radix: Number2;
  integer: String2;
  value: Number2;

  constructor(ctx: IntegerLiteralContext) {
    super();
    this.sourceRange = SourceSpan.fromContext(ctx);
    const [integer, radix] = ctx.text.split('x').reverse();
    this.integer = integer;
    this.radix = Number(radix);

    this.value = parseInt(this.integer.replace(/_/gu, ''), this.radix);
  }
}
