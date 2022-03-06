import { ExpressionMetadata } from '../../metadata/expression/expression-metadata';
import { Tree } from '../tree';

export interface ExpressionTree extends Tree {
  metadata: ExpressionMetadata;
}
