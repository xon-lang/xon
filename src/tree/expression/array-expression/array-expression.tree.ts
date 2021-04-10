import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
  public arguments: ArgumentTree[];

  public constructor(public ctx?: ArrayExpressionContext) {
    super();
    if (!ctx) return;

    this.arguments = ArgumentTree.fromContext(ctx.arguments());
  }
}
