import { PreprocessorExpressionContext } from '~/grammar';
import { String2 } from '~/lib';
import { ExpressionTree } from '~/tree';
import { SourceRange } from '~/util';

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
