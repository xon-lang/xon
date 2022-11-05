import { StringLiteralContext } from '@/grammar/xon-parser';
import { String2 } from '@/lib/core';
import { LiteralTree } from '@/tree/literal/literal-tree';
import { SourceRange } from '@/util/source-range';

export class StringLiteralTree extends LiteralTree {
  ctx: StringLiteralContext;
  sourceRange: SourceRange;
  value: String2;

  constructor(ctx: StringLiteralContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = ctx.text.slice(1, -1).replace(/\\'/g, '\'');
  }
}
