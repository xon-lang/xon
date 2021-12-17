import { ExpressionStatementContext } from '../../../grammar/xon-parser';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { StatementNode } from '../statement-node';

export class ExpressionStatementTree extends StatementNode {
  expression: ExpressionNode;

  constructor(public ctx: ExpressionStatementContext) {
    super();

    this.expression = getExpressionNode(ctx.expression());
  }

  toString(): string {
    return this.expression.toString();
  }
}
