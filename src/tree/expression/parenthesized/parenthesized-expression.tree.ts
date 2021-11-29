import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class ParenthesizedExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata;
  value: ExpressionTree;

  constructor(public ctx: ParenthesizedExpressionContext) {
    super();

    this.value = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return `(${this.value})`;
  }
}
