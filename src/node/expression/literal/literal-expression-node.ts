import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { LiteralExpressionMetadata } from '../../../metadata/expression/literal/literal-expression-metadata';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { ExpressionNode } from '../expression-node';

export class LiteralExpressionNode extends ExpressionNode {
  context: LiteralExpressionContext;
  tree: LiteralExpressionTree;
  metadata: LiteralExpressionMetadata;
}
