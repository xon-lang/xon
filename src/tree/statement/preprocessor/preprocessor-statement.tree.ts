import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { StatementTree } from '../statement.tree';

export class PreprocessorStatementTree extends StatementTree {
  value: string;

  constructor(public ctx: PreprocessorStatementContext) {
    super();

    const beforeSymbolsCount = 2;
    this.value = ctx.PREPROCESSOR().text.trim().slice(beforeSymbolsCount, -1);
  }

  toString(): string {
    return this.ctx.text;
  }
}
