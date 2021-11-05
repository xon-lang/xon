import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsFromBody } from '../statement-tree.helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends StatementTree {
  public condition: ExpressionTree;

  public thenBody: StatementTree[];

  public elseBody?: StatementTree[];

  public constructor(public ctx?: IfStatementContext) {
    super();
    if (!ctx) return;

    this.condition = getExpressionTree(ctx.expression());
    this.thenBody = getStatementsFromBody(ctx._thenBody);
    this.elseBody = getStatementsFromBody(ctx._elseBody);
  }
}
