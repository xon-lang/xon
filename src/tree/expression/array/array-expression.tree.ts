import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { ArrayExpressionMetadata } from '../../../metadata/expression/array/array-expression-metadata';
import { getExpressionsTrees } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
  metadata: ArrayExpressionMetadata;
  items: ExpressionTree[];

  constructor(public ctx: ArrayExpressionContext) {
    super();

    this.items = getExpressionsTrees(ctx.expression());
  }

  toString(): string {
    return `[${this.items.join(', ')}]`;
  }
}
