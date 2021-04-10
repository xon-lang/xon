import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { StatementTree } from '../statement.tree';

export class PreprocessorStatementTree extends StatementTree {
  public value: string;

  public constructor(public ctx?: PreprocessorStatementContext) {
    super();
    if (!ctx) return;

    const beforeSymbolsCount = 2;
    this.value = ctx.PREPROCESSOR().text.trim().slice(beforeSymbolsCount, -1);
  }
}
