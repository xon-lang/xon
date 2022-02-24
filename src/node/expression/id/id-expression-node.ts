import { IdExpressionContext } from '../../../grammar/xon-parser';
import { IdExpressionMetadata } from '../../../metadata/expression/id/id-expression-metadata';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { ExpressionNode } from '../expression-node';

export class IdExpressionNode extends ExpressionNode {
  context: IdExpressionContext;
  tree: IdExpressionTree;
  metadata: IdExpressionMetadata;
}
