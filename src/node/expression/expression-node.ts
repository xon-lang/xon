import { ExprContext } from '../../grammar/xon-parser';
import { ExpressionMetadata } from '../../metadata/expression/expression-metadata';
import { ExpressionTree } from '../../tree/expression/expression-tree';
import { Node } from '../node';

export class ExpressionNode extends Node {
  context: ExprContext;
  tree: ExpressionTree;
  metadata: ExpressionMetadata;
}
