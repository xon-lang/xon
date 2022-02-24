import { ParenthesizedExpressionContext } from '../../../grammar/xon-parser';
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata';
import { ParenthesizedExpressionTree } from '../../../tree/expression/parenthesized/parenthesized-expression-tree';
import { ExpressionNode } from '../expression-node';

export class ParenthesizedExpressionNode extends ExpressionNode {
  context: ParenthesizedExpressionContext;
  tree: ParenthesizedExpressionTree;
  metadata: ExpressionMetadata;
}
