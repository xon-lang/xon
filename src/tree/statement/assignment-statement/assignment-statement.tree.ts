import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class AssignmentStatementTree extends StatementTree {
  value: ExpressionTree;

  name: string;

  constructor(public ctx?: AssignmentStatementContext) {
    super();
    if (!ctx) return;

    this.name = ctx.ID().text;
    this.value = getExpressionTree(ctx.expression());
  }
}
