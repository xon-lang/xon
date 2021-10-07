import { MemberAssignmentContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { AssignmentTree } from '../assignment.tree';

export class MemberAssignmentTree extends AssignmentTree {
  public member: ExpressionTree;
  public value: ExpressionTree;

  public constructor(public ctx?: MemberAssignmentContext) {
    super();
    if (!ctx) return;

    this.member = getExpressionTree(ctx.expression(0));
    this.value = getExpressionTree(ctx.expression(1));
  }
}
