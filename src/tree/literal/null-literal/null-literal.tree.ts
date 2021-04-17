import { NullLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class NullLiteralTree extends LiteralTree {
  public value = null;

  public constructor(public ctx?: NullLiteralContext) {
    super();
  }
}
