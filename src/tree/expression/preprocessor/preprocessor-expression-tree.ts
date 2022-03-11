import { PreprocessorExpressionContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { ExpressionTree } from '../expression-tree';

export class PreprocessorExpressionTree implements ExpressionTree {
  metadata: ExpressionMetadata;
  sourceRange: SourceRange;
  value: String;

  constructor(ctx: PreprocessorExpressionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = ctx.PREPROCESSOR().text.trim().slice(2, -1);
  }

  toString(): String {
    return `#{${this.value}}`;
  }
}
