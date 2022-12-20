import { StringExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class StringExpressionTree extends ExpressionTree {
  ctx: StringExpressionContext;
  sourceSpan: SourceSpan;
  value: String2;

  constructor(ctx: StringExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.value = ctx.text.slice(1, -1).replace(/\\'/gu, '\'');
  }
}
