import { WhileStatementContext } from '../../../grammar/xon-parser';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { StatementNode } from '../statement-node';
import { getStatementsFromBody } from '../statement-node-helper';

export class WhileStatementTree extends StatementNode {
  expression: ExpressionNode;
  body: StatementNode[];

  constructor(public ctx: WhileStatementContext) {
    super();

    this.expression = getExpressionNode(ctx.expr());
    this.body = getStatementsFromBody(ctx.body());
  }

  toString(): string {
    const statements = this.body.join('\n').replace(/^/gm, '  ');
    return `while ${this.expression}:\n${statements}`;
  }
}
