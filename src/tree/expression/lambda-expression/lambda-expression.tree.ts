import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getStatementTree } from '../../statement/statement-helper';
import { StatementTree } from '../../statement/statement.tree';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  public parameters: ParameterTree[];

  public statement: StatementTree;

  public constructor(public ctx?: LambdaExpressionContext) {
    super();
    if (!ctx) return;

    this.parameters = ctx.parameter().map((x) => new ParameterTree(x));
    this.statement = getStatementTree(ctx.statement());
  }
}
