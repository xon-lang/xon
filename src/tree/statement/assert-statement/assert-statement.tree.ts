import { AssertStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class AssertStatementTree extends StatementTree {
  actual: ExpressionTree;
  
  expect: ExpressionTree;

  constructor(public ctx?: AssertStatementContext) {
    super();
    if (!ctx) return;

    this.actual = getExpressionTree(ctx.expression(0));
    this.expect = getExpressionTree(ctx.expression(1));
  }
}
