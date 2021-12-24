import { ExpressionStatementContext } from '../../../grammar/xon-parser';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class ExpressionStatementNode implements StatementNode {
  sourceReference: SourceReference;
  expression: ExpressionNode;

  constructor(ctx: ExpressionStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.expression = getExpressionNode(ctx.expr());
  }

  toString(): string {
    return this.expression.toString();
  }
}
