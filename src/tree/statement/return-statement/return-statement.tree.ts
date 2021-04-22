import { ReturnStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class ReturnStatementTree extends StatementTree {
  public value?: ExpressionTree;

  public constructor(public ctx?: ReturnStatementContext) {
    super();
    if (!ctx) return;

    this.value = ctx.expression() && getExpressionTree(ctx.expression());
  }
}
