import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class ParenthesizedExpressionNode extends ExpressionNode {
  metadata: ExpressionMetadata;
  expression: ExpressionNode;

  constructor(public ctx: ParenthesizedExpressionContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    this.expression = getExpressionNode(ctx.expr());
  }

  toString(): string {
    return `(${this.expression})`;
  }
}
