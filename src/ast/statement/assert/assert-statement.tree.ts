import { AssertStatementContext } from '../../../grammar/xon-parser';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { StatementNode } from '../statement-node';

export class AssertStatementTree extends StatementNode {
  actual: ExpressionNode;
  expect: ExpressionNode;

  constructor(public ctx: AssertStatementContext) {
    super();

    this.actual = getExpressionNode(ctx.expr(0));
    this.expect = getExpressionNode(ctx.expr(1));
  }

  toString(): string {
    return `actual: ${this.actual}\nexpect: ${this.expect}`;
  }
}
