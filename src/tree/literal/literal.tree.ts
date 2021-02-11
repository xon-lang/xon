import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class LiteralTree extends BaseTree {
  public constructor(public ctx: LiteralContext) {
    super();
  }

  public abstract getValue(): unknown;
}
