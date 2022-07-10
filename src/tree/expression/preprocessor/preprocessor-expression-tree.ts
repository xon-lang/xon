// this code was generated

import { PreprocessorExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';

export class PreprocessorExpressionTree extends ExpressionTree {
  ctx: PreprocessorExpressionContext;
  sourceRange: SourceRange;
  value: String;

  constructor(ctx: PreprocessorExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = ctx.PREPROCESSOR().text.trim().slice(2, -1);
  }
}

// this code was generated
