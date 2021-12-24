import { AssertStatementContext } from '../../../grammar/xon-parser';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class AssertStatementNode implements StatementNode {
  sourceReference: SourceReference;
  actual: ExpressionNode;
  expect: ExpressionNode;

  constructor(ctx: AssertStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.actual = getExpressionNode(ctx.expr(0));
    this.expect = getExpressionNode(ctx.expr(1));
  }

  toString(): string {
    return `actual: ${this.actual}\nexpect: ${this.expect}`;
  }
}
