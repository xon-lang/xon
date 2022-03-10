import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { StatementTree } from '../statement-tree';

export class PreprocessorStatementTree implements StatementTree {
  sourceRange: SourceRange;
  value: string;

  constructor(ctx: PreprocessorStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);

    const beforeSymbolsCount = 2;
    this.value = ctx.PREPROCESSOR().text.trim().slice(beforeSymbolsCount, -1);
  }

  toString(): string {
    return this.sourceRange.rangeText;
  }
}
