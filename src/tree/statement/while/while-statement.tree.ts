import { WhileStatementContext } from '../../../grammar/xon-parser';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getStatementsFromBody } from '../statement-node-helper';
import { StatementNode } from '../statement-node';

export class WhileStatementTree extends StatementNode {
  expression: ExpressionNode;
  body: StatementNode[];

  constructor(public ctx: WhileStatementContext) {
    super();

    this.expression = getExpressionNode(ctx.expression());
    this.body = getStatementsFromBody(ctx.body());
  }

  toString(): string {
    const statements = this.body.join('\n').replace(/^/gm, '  ');
    return `while ${this.expression}:\n${statements}`;
  }
}
