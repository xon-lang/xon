import { ExpressionMetadata } from '../../metadata/expression/expression-metadata';
import { Node } from '../node';

export interface ExpressionNode extends Node {
  metadata: ExpressionMetadata;
}
