import { WhileStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getBody } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class WhileStatementTree extends StatementTree {
  public expression: ExpressionTree;

  public body: StatementTree[];

  public constructor(public ctx?: WhileStatementContext) {
    super();
    if (!ctx) return;

    this.expression = getExpressionTree(ctx.expression());
    this.body = getBody(ctx.body());
  }
}
