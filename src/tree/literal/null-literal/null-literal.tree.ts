import { NullLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class NullLiteralTree extends LiteralTree {
  value = null;
  
  constructor(public ctx?: NullLiteralContext) {
    super();
  }

  toString(): string {
    return `${this.value}`;
  }
}
