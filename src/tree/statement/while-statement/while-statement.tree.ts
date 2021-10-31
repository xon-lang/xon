import { WhileStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatements } from '../statement-tree.helper';
import { StatementTree } from '../statement.tree';

export class WhileStatementTree extends StatementTree {
  public expression: ExpressionTree;

  public body: StatementTree[];

  public constructor(public ctx?: WhileStatementContext) {
    super();
    if (!ctx) return;

    this.expression = getExpressionTree(ctx.expression());
    this.body = getStatements(ctx.body());
  }
}
