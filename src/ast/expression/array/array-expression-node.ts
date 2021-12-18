import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { ArrayExpressionMetadata } from '../../../metadata/expression/array/array-expression-metadata';
import { ExpressionNode } from '../expression-node';
import { getExpressionNodes } from '../expression-node-helper';

export class ArrayExpressionNode extends ExpressionNode {
  metadata: ArrayExpressionMetadata;
  items: ExpressionNode[];

  constructor(public ctx: ArrayExpressionContext) {
    super();
console.log(ctx.text);

    this.items = getExpressionNodes(ctx.arguments());
  }

  toString(): string {
    return `[${this.items.join(', ')}]`;
  }
}
