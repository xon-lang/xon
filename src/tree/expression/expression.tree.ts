import { ExpressionContext } from '../../grammar/xon-parser';
import { TypeInfo } from '../../metadata/type/type-info';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
  abstract ctx?: ExpressionContext;
  typeMetadata: TypeInfo;
}
