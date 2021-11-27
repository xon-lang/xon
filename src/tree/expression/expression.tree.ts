import { ExpressionContext } from '../../grammar/xon-parser';
import { ExpressionMetadata } from '../../metadata/expression/expression-metadata';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
  abstract ctx?: ExpressionContext;
  abstract metadata: ExpressionMetadata;
}
