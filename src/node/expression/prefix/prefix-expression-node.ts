import { PrefixExpressionContext } from '../../../grammar/xon-parser';
import { PrefixExpressionMetadata } from '../../../metadata/expression/prefix/prefix-expression-metadata';
import { PrefixExpressionTree } from '../../../tree/expression/prefix/prefix-expression-tree';
import { ExpressionNode } from '../expression-node';

export class PrefixExpressionNode extends ExpressionNode {
  context: PrefixExpressionContext;
  tree: PrefixExpressionTree;
  metadata: PrefixExpressionMetadata;
}
