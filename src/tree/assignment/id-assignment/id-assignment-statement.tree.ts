import { IdAssignmentContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { AssignmentTree } from '../assignment.tree';

export class IdAssignmentTree extends AssignmentTree {
  public name: string;
  public type?: TypeTree;
  public value: ExpressionTree;

  public constructor(public ctx?: IdAssignmentContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.type = getTypeTree(ctx.type());
    this.value = getExpressionTree(ctx.expression());
  }
}
