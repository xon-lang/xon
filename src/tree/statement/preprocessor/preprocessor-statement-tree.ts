import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { StatementTree } from '../statement-tree';

export class PreprocessorStatementTree implements StatementTree {
  sourceRange: SourceRange;
  value: String;

  constructor(ctx: PreprocessorStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);

    const hashColumnPosition = 2;
    this.value = ctx.PREPROCESSOR().text.trim().slice(hashColumnPosition, -1);
  }

  toString(): String {
    return this.sourceRange.rangeText;
  }
}
