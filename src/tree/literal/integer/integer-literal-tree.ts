import { IntegerLiteralContext } from '../../../grammar/xon-parser';
import { Number, String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../literal-tree';

export class IntegerLiteralTree implements LiteralTree {
  sourceRange: SourceRange;
  radix: Number;
  integer: String;
  value: Number;

  constructor(ctx: IntegerLiteralContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    const [integer, radix] = ctx.text.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;

    this.value = parseInt(this.integer.replace(/_/g, ''), this.radix);
  }
}
