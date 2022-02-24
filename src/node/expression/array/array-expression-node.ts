import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { ArrayExpressionMetadata } from '../../../metadata/expression/array/array-expression-metadata';
import { ArrayExpressionTree } from '../../../tree/expression/array/array-expression-tree';
import { ExpressionNode } from '../expression-node';

export class ArrayExpressionNode extends ExpressionNode {
  context: ArrayExpressionContext;
  tree: ArrayExpressionTree;
  metadata: ArrayExpressionMetadata;
}
