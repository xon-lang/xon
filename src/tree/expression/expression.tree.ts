import { ExpressionContext } from '../../grammar/xon-parser';
import { ExpressionMetadata } from '../../metadata/handler/expression/expression-metadata';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
  abstract ctx?: ExpressionContext;
  metadata: ExpressionMetadata;
}
