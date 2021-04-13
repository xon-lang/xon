import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getExpressionTree } from '../expression-helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  public parameters: ParameterTree[];

  public expression: ExpressionTree;

  public constructor(public ctx?: LambdaExpressionContext) {
    super();
    if (!ctx) return;

    this.parameters = ctx.parameter().map((x) => new ParameterTree(x));
    this.expression = getExpressionTree(ctx.expression());
  }
}
