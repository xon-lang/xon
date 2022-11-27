import { StringLiteralContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { LiteralTree } from '~/tree/literal/literal-tree';
import { SourceSpan } from '~/util/source/source-span';

export class StringLiteralTree extends LiteralTree {
  ctx: StringLiteralContext;
  sourceSpan: SourceSpan;
  value: String2;

  constructor(ctx: StringLiteralContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.value = ctx.text.slice(1, -1).replace(/\\'/gu, "'");
  }
}
