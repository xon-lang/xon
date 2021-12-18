import { ExprContext } from '../../grammar/xon-parser';
import { ExpressionMetadata } from '../../metadata/expression/expression-metadata';
import { Node } from '../node';

export abstract class ExpressionNode extends Node {
  abstract ctx: ExprContext;
  abstract metadata: ExpressionMetadata;
}
