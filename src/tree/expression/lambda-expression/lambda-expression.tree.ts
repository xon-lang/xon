import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { getParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  parameters: ParameterTree[];
  expression: ExpressionTree;

  constructor(public ctx?: LambdaExpressionContext) {
    super();
    if (!ctx) return;

    this.parameters = getParametersTrees(ctx.lambdaParameters());
    this.expression = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return `(${this.parameters.join(', ')}): ${this.expression}`;
  }
}
