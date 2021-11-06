import { IdAssignmentContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { AssignmentTree } from '../assignment.tree';

export class IdAssignmentTree extends AssignmentTree {
  id: IdToken;
  value: ExpressionTree;

  constructor(public ctx?: IdAssignmentContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.value = getExpressionTree(ctx.expression());
  }
}
