import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { ArrayExpressionMetadata } from '../../../metadata/expression/array/array-expression-metadata';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNodes } from '../expression-node-helper';

export class ArrayExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: ArrayExpressionMetadata;
  items: ExpressionNode[];

  constructor(ctx: ArrayExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.items = getExpressionNodes(ctx.expr());
  }

  toString(): string {
    return `[${this.items.join(', ')}]`;
  }
}
