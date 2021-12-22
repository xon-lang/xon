import { ReturnStatementContext } from '../../../grammar/xon-parser';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { StatementNode } from '../statement-node';

export class ReturnStatementNode extends StatementNode {
  value?: ExpressionNode;

  constructor(public ctx: ReturnStatementContext) {
    super();

    this.value = ctx.expr() && getExpressionNode(ctx.expr());
  }

  toString(): string {
    return `return${this.value ? ' ' + this.value : ''}`;
  }
}
