import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { StatementTree } from '../statement-tree';

export class PreprocessorStatementTree implements StatementTree {
  sourceReference: SourceRange;
  value: string;

  constructor(ctx: PreprocessorStatementContext) {
    this.sourceReference = SourceRange.fromContext(ctx);

    const beforeSymbolsCount = 2;
    this.value = ctx.PREPROCESSOR().text.trim().slice(beforeSymbolsCount, -1);
  }

  toString(): string {
    return this.sourceReference.rangeText;
  }
}
