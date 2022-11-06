import { StringLiteralContext } from '~/grammar';
import { String2 } from '~/lib';
import { LiteralTree } from '~/tree';
import { SourceRange } from '~/util';

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
