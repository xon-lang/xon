import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { MethodExpressionMetadata } from '../../../metadata/expression/method/method-expression-metadata';
import { SourceRange } from '../../../util/source-range';
import { BodyTree } from '../../body/body-tree';
import { getBodyTree } from '../../body/body-tree-helper';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTrees } from '../../parameter/parameter-tree-helper';
import { ExpressionTree } from '../expression-tree';

export class MethodExpressionTree implements ExpressionTree {
  sourceReference: SourceRange;
  metadata: MethodExpressionMetadata;
  parameters: ParameterTree[] = [];
  body: BodyTree;

  constructor(ctx: MethodExpressionContext) {
    this.sourceReference = SourceRange.fromContext(ctx);
    this.parameters = getParameterTrees(ctx.parameter());
    this.body = getBodyTree(ctx.body());
  }

  toString(): string {
    return `(${this.parameters.join(', ')})${this.body}`;
  }
}
