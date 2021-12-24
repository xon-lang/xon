import { WhileStatementContext } from '../../../grammar/xon-parser';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class WhileStatementNode implements StatementNode {
  sourceReference: SourceReference;
  expression: ExpressionNode;
  body: BodyNode;

  constructor(public ctx: WhileStatementContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    this.expression = getExpressionNode(ctx.expr());
    this.body = getBodyNode(ctx.body());
  }

  toString(): string {
    return `while ${this.expression}:\n${this.body}`;
  }
}
