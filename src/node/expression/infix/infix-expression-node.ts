import { InfixExpressionContext } from '../../../grammar/xon-parser';
import { InfixExpressionMetadata } from '../../../metadata/expression/infix/infix-expression-metadata';
import { InfixExpressionTree } from '../../../tree/expression/infix/infix-expression-tree';
import { ExpressionNode } from '../expression-node';

export class InfixExpressionNode extends ExpressionNode {
  context: InfixExpressionContext;
  tree: InfixExpressionTree;
  metadata: InfixExpressionMetadata;
}
