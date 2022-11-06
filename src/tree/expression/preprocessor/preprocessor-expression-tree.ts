import { PreprocessorExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { SourceRange } from '~/util/source-range';

export class PreprocessorExpressionTree extends ExpressionTree {
  ctx: PreprocessorExpressionContext;
  sourceRange: SourceRange;
  value: String2;

  constructor(ctx: PreprocessorExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = ctx.PREPROCESSOR().text.trim().slice(2, -1);
  }
}
