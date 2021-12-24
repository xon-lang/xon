import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { SourceReference } from '../../util/source-reference';
import { ExpressionNode } from '../expression-node';
import { getExpressionNodes } from '../expression-node-helper';

export class ArrayExpressionNode implements ExpressionNode {
  sourceReference: SourceReference;
  metadata: ExpressionMetadata;
  items: ExpressionNode[];

  constructor(ctx: ArrayExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.items = getExpressionNodes(ctx.expr());
  }

  toString(): string {
    return `[${this.items.join(', ')}]`;
  }
}
