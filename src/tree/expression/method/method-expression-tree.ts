import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTrees } from '../../parameter/parameter-tree-helper';
import { ExpressionTree } from '../expression-tree';
import { getExpressionTree } from '../expression-tree-helper';

export class MethodExpressionTree implements ExpressionTree {
  sourceReference: SourceReference;
  parameters: ParameterTree[] = [];
  result: ExpressionTree;

  constructor(ctx: MethodExpressionContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.parameters = getParameterTrees(ctx.parameter());
    this.result = getExpressionTree(ctx.expr());
  }

  toString(): string {
    return `(${this.parameters.join(', ')}) ${this.result}`;
  }
}
