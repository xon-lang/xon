import { NullableExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class NullableExpressionNode extends ExpressionNode {
  metadata: ExpressionMetadata;
  value: ExpressionNode;

  constructor(public ctx: NullableExpressionContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    this.value = getExpressionNode(ctx.expr());
  }

  toString(): string {
    return `${this.value}?`;
  }
}
