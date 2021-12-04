import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { IdToken } from '../../id-token';
import { StatementTree } from '../statement.tree';

export class AssignmentStatementTree extends StatementTree {
  ids: IdToken[];
  value: ExpressionTree;

  constructor(public ctx: AssignmentStatementContext) {
    super();

    this.ids = ctx.id().map((x) => IdToken.fromContext(x));
    this.value = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return `${this.ids.join(', ')} = ${this.value}`;
  }
}
