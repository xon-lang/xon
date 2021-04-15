import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getBody } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends StatementTree {
  public condition: ExpressionTree;

  public thenBody: StatementTree[];

  public elseBody: StatementTree[];

  public constructor(public ctx?: IfStatementContext) {
    super();
    if (!ctx) return;

    this.condition = getExpressionTree(ctx.expression());
    this.thenBody = getBody(ctx.body(0));
    this.elseBody = (ctx.ELSE() && getBody(ctx.body(1))) || [];
  }
}
