import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { StatementTree } from '../statement.tree';

export class PreprocessorStatementTree extends StatementTree {
  public value: string;

  public constructor(public ctx: PreprocessorStatementContext) {
    super();
    this.value = ctx.Preprocessor().text.trim().slice(2, -1);
  }
}
