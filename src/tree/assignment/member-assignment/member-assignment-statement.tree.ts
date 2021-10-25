import { MemberAssignmentContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { AssignmentTree } from '../assignment.tree';

export class MemberAssignmentTree extends AssignmentTree {
  public instance: ExpressionTree;
  public id: IdToken;
  public value: ExpressionTree;

  public constructor(public ctx?: MemberAssignmentContext) {
    super();
    if (!ctx) return;

    this.instance = getExpressionTree(ctx.expression(0));
    this.id = new IdToken(ctx._name);
    this.value = getExpressionTree(ctx.expression(1));
  }
}
