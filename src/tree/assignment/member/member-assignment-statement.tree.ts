import { MemberAssignmentContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { AssignmentTree } from '../assignment.tree';

export class MemberAssignmentTree extends AssignmentTree {
  instance: ExpressionTree;
  id: IdToken;
  value: ExpressionTree;

  constructor(public ctx: MemberAssignmentContext) {
    super();

    this.instance = getExpressionTree(ctx.expression(0));
    this.id = new IdToken(ctx._name);
    this.value = getExpressionTree(ctx.expression(1));
  }

  toString(): string {
    return `${this.instance}.${this.id} = ${this.value}`;
  }
}
