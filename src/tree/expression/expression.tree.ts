import { ExpressionContext } from '../../grammar/xon-parser';
import { TypeMetadata } from '../../metadata/type/type-metadata';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
  public abstract ctx?: ExpressionContext;
  public typeMetadata: TypeMetadata;
}
