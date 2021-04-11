import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class MethodExpressionTree extends ExpressionTree {
  public arguments: ArgumentTree[];

  public object: ExpressionTree;

  public constructor(public ctx: MethodExpressionContext) {
    super();

    this.arguments = ArgumentTree.fromContext(ctx.arguments());
    this.object = getExpressionTree(ctx.expression());
  }
}
