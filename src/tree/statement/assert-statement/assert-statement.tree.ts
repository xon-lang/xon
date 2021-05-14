import { AssertStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class AssertStatementTree extends StatementTree {
  public actual: ExpressionTree;

  public expect: ExpressionTree;

  public constructor(public ctx?: AssertStatementContext) {
    super();
    if (!ctx) return;

    this.actual = getExpressionTree(ctx._actual);
    this.expect = getExpressionTree(ctx._expect);
  }
}
