import { LiteralContext } from '../../grammar/xon-parser';
import { TypeMetadata } from '../../metadata/type/type-metadata';
import { BaseTree } from '../base.tree';

export abstract class LiteralTree extends BaseTree {
  public abstract ctx?: LiteralContext;
  public abstract value: unknown;
  public typeMetadata: TypeMetadata;
}
