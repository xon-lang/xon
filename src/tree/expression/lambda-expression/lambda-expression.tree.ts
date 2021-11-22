import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionParametersTrees } from '../../expression-parameter/expression-parameter-tree.helper';
import { ExpressionParameterTree } from '../../expression-parameter/expression-parameter.tree';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  parameters: ExpressionParameterTree[];
  expression: ExpressionTree;

  constructor(public ctx?: LambdaExpressionContext) {
    super();
    if (!ctx) return;

    this.parameters = getExpressionParametersTrees(ctx.functionParameters());
    this.expression = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return `(${this.parameters.join(', ')}): ${this.expression}`;
  }
}
