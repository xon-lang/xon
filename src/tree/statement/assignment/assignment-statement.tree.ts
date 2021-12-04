import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { StatementTree } from '../statement.tree';

export class AssignmentStatementTree extends StatementTree {
  id: IdToken;
  value: ExpressionTree;

  constructor(public ctx: AssignmentStatementContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    this.value = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return `${this.id} = ${this.value}`;
  }
}
