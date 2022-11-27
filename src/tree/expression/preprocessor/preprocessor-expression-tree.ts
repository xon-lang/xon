import { PreprocessorExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { SourceSpan } from '~/util/source/source-span';

export class PreprocessorExpressionTree extends ExpressionTree {
  ctx: PreprocessorExpressionContext;
  sourceRange: SourceSpan;
  value: String2;

  constructor(ctx: PreprocessorExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.value = ctx.PREPROCESSOR().text.trim().slice(2, -1);
  }
}
