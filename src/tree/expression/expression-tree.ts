import { ExpressionMetadata } from '~/metadata/expression/expression-metadata';
import { TypeMetadata } from '~/metadata/type/type-metadata';
import { Tree } from '~/tree/tree';

export abstract class ExpressionTree extends Tree {
  metadata: ExpressionMetadata | TypeMetadata | null = null;
}
