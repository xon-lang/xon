import { InvokeExpressionContext } from '../../../grammar/xon-parser';
import { InvokeExpressionMetadata } from '../../../metadata/expression/invoke/invoke-expression-metadata';
import { InvokeExpressionTree } from '../../../tree/expression/invoke/invoke-expression-tree';
import { ExpressionNode } from '../expression-node';

export class InvokeExpressionNode extends ExpressionNode {
  context: InvokeExpressionContext;
  tree: InvokeExpressionTree;
  metadata: InvokeExpressionMetadata;
}
