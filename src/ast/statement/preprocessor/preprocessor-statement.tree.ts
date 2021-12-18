import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { StatementNode } from '../statement-node';

export class PreprocessorStatementTree extends StatementNode {
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
