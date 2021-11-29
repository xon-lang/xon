import { ExpressionStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class ExpressionStatementTree extends StatementTree {
  expression: ExpressionTree;

  constructor(public ctx: ExpressionStatementContext) {
    super();

    this.expression = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return this.expression.toString();
  }
}
