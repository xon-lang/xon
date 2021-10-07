import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { getAssignmentTree } from '../../assignment/assignment-tree.helper';
import { AssignmentTree } from '../../assignment/assignment.tree';
import { StatementTree } from '../statement.tree';

export class AssignmentStatementTree extends StatementTree {
  public assignment: AssignmentTree;

  public constructor(public ctx?: AssignmentStatementContext) {
    super();
    if (!ctx) return;

    this.assignment = getAssignmentTree(ctx.assignment());
  }
}
