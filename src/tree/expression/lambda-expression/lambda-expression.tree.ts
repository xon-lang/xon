import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { getStatementTree } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  public parameters: string[];

  public statement: StatementTree;

  public constructor(public ctx?: LambdaExpressionContext) {
    super();
    if (!ctx) return;

    this.parameters = ctx.id().map((x) => x.text);
    this.statement = getStatementTree(ctx.statement());
  }
}
