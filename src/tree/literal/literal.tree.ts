import { LiteralContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class LiteralTree extends BaseTree {
  constructor(public ctx: LiteralContext) {
    super();
  }

  abstract getValue(): unknown;
}
