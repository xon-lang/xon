import { MemberAssignmentStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { StatementTree } from '../statement.tree';

export class MemberAssignmentStatementTree extends StatementTree {
  public name: string;

  public value: ExpressionTree;

  public constructor(public ctx?: MemberAssignmentStatementContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.value = getExpressionTree(ctx.expression());
  }
}
