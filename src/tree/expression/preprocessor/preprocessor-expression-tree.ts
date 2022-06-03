// this code was generated

import { PreprocessorExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { Metadata } from '../../../metadata/metadata';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';

export class PreprocessorExpressionTree extends ExpressionTree {
  metadata: Metadata;
  ctx: PreprocessorExpressionContext;
  sourceRange: SourceRange;
  value: String;

  constructor(ctx: PreprocessorExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = ctx.PREPROCESSOR().text.trim().slice(2, -1);
  }

  toString(): String {
    return `#{${this.value}}`;
  }
}

// this code was generated
