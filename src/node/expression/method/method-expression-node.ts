import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { MethodExpressionMetadata } from '../../../metadata/expression/method/method-expression-metadata';
import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { ExpressionNode } from '../expression-node';

export class MethodExpressionNode extends ExpressionNode {
  context: MethodExpressionContext;
  tree: MethodExpressionTree;
  metadata: MethodExpressionMetadata;
}
