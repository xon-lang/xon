import { FunctionExpressionContext } from '../../../grammar/xon-parser';
import { ArgumentTree } from '../../argument/argument.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class FunctionExpressionTree extends ExpressionTree {
  public arguments: ArgumentTree[];

  public object: ExpressionTree;

  public constructor(public ctx: FunctionExpressionContext) {
    super();

    this.arguments = ctx.argument().map((x) => new ArgumentTree(x));
    this.object = getExpressionTree(ctx.expression());
  }
}
