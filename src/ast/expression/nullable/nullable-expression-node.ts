import { NullableExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNode } from '../expression-node-helper';

export class NullableExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
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
