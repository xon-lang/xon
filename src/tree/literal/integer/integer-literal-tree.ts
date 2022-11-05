import { IntegerLiteralContext } from '../../../grammar/xon-parser';
import { Number2, String2 } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../literal-tree';

export class IntegerLiteralTree extends LiteralTree {
  sourceRange: SourceRange;
  radix: Number2;
  integer: String2;
  value: Number2;

  constructor(ctx: IntegerLiteralContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    const [integer, radix] = ctx.text.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;

    this.value = parseInt(this.integer.replace(/_/g, ''), this.radix);
  }
}
