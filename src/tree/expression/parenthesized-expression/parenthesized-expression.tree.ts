import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class ParenthesizedExpressionTree extends ExpressionTree {
  public value: ExpressionTree;

  public constructor(public ctx?: ParenthesizedExpressionContext) {
    super();
    if (!ctx) return;

    this.value = getExpressionTree(ctx.expression());
  }

  public static fromValue(value: ExpressionTree): ParenthesizedExpressionTree {
    const expression = new ParenthesizedExpressionTree();
    expression.value = value;
    return expression;
  }

  public toString(): string {
    return `(${this.value})`;
  }
}
