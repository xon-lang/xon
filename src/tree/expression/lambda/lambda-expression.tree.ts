import { LambdaExpressionContext } from '../../../grammar/xon-parser';
import { LambdaExpressionMetadata } from '../../../metadata/expression/lambda/lambda-expression-metadata';
import { getExpressionParametersTrees } from '../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../parameter/parameter.tree';
import { getExpressionTree } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class LambdaExpressionTree extends ExpressionTree {
  metadata: LambdaExpressionMetadata;
  parameters: ParameterTree[];
  expression: ExpressionTree;

  constructor(public ctx: LambdaExpressionContext) {
    super();

    this.parameters = getExpressionParametersTrees(ctx.methodParameters());
    this.expression = getExpressionTree(ctx.expression());
  }

  toString(): string {
    return `(${this.parameters.join(', ')}): ${this.expression}`;
  }
}
