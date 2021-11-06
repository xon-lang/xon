import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsFromBody } from '../statement-tree.helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends StatementTree {
  condition: ExpressionTree;
  
  thenBody: StatementTree[];
  
  public elseBody?: StatementTree[];

  constructor(public ctx?: IfStatementContext) {
    super();
    if (!ctx) return;

    this.condition = getExpressionTree(ctx.expression());
    this.thenBody = getStatementsFromBody(ctx._thenBody);
    this.elseBody = getStatementsFromBody(ctx._elseBody);
  }
}
