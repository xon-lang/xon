import { PipeExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class PipeExpressionTree extends ExpressionTree {
  public arg: string;
  public left: ExpressionTree;
  public right: ExpressionTree;

  public constructor(public ctx: PipeExpressionContext) {
    super();
    this.arg = ctx._name?.text;
    this.left = getExpressionTree(ctx.expression(0));
    this.right = getExpressionTree(ctx.expression(1));
  }

  public toString(): string {
    const arg = this.arg ? `${this.arg}:` : '';
    return `${this.left} |${arg} ${this.right}`;
  }
}
