import { IfStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsTrees } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class IfStatementTree extends ExpressionTree {
  public condition: ExpressionTree;

  public ifStatements: StatementTree[];

  public elseStatements?: StatementTree[];

  public constructor(public ctx?: IfStatementContext) {
    super();
    if (!ctx) return;

    this.condition = getExpressionTree(ctx.expression());
    this.ifStatements = getStatementsTrees(ctx.body(0));
    if (ctx.ELSE()) this.elseStatements = getStatementsTrees(ctx.body(1));
  }
}
