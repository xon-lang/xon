import { WhileStatementContext } from '../../../grammar/xon-parser';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { StatementNode } from '../statement-node';

export class WhileStatementNode extends StatementNode {
  expression: ExpressionNode;
  body: BodyNode;

  constructor(public ctx: WhileStatementContext) {
    super();

    this.expression = getExpressionNode(ctx.expr());
    this.body = getBodyNode(ctx.body());
  }

  toString(): string {
    return `while ${this.expression}:\n${this.body}`;
  }
}
