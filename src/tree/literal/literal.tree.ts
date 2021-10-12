import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class LiteralTree extends BaseTree {
  public abstract ctx?: LiteralContext;
  public abstract value: unknown;
}
