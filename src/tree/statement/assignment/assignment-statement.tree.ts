import { AssignmentStatementContext } from '../../../grammar/xon-parser';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { IdToken } from '../../id-token';
import { StatementNode } from '../statement-node';

export class AssignmentStatementTree extends StatementNode {
  id: IdToken;
  value: ExpressionNode;

  constructor(public ctx: AssignmentStatementContext) {
    super();

    this.id = IdToken.fromContext(ctx.id());
    this.value = getExpressionNode(ctx.expr());
  }

  toString(): string {
    return `${this.id} = ${this.value}`;
  }
}
