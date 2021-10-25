import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  public parameters: ParameterTree[];

  public body: ExpressionTree;

  public constructor(public ctx?: LambdaExpressionContext) {
    super();
    if (!ctx) return;

    this.parameters = getParametersTrees(ctx.parameter());
    this.body = getExpressionTree(ctx.expression());
  }

  public toString(): string {
    return `\\${this.parameters.join(', ')}: ${this.body}`;
  }
}
