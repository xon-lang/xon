import { IdAssignmentContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { getTypeTree } from '../../type/type-tree.helper';
import { TypeTree } from '../../type/type.tree';
import { AssignmentTree } from '../assignment.tree';

export class IdAssignmentTree extends AssignmentTree {
  public id: IdToken;
  public type?: TypeTree;
  public value: ExpressionTree;

  public constructor(public ctx?: IdAssignmentContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.type = getTypeTree(ctx.type()) || null;
    this.value = getExpressionTree(ctx.expression());
  }
}
