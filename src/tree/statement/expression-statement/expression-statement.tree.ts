import { ExpressionStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class ExpressionStatementTree extends StatementTree {
  public expression: ExpressionTree;

  public constructor(public ctx?: ExpressionStatementContext) {
    super();
    if (!ctx) return;

    this.expression = getExpressionTree(ctx.expression());
  }
}
