import { NullLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class NullLiteralTree extends LiteralTree<null> {
  constructor(public ctx: NullLiteralContext) {
    super();
    this.value = null;
  }
}
