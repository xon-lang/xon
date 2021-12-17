import { ReturnStatementContext } from '../../../grammar/xon-parser';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { StatementNode } from '../statement-node';

export class ReturnStatementTree extends StatementNode {
  value?: ExpressionNode;

  constructor(public ctx: ReturnStatementContext) {
    super();

    this.value = ctx.expression() && getExpressionNode(ctx.expression());
  }

  toString(): string {
    return `return${this.value ? ' ' + this.value : ''}`;
  }
}
