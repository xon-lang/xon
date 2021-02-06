import { StringLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class StringLiteralTree extends LiteralTree<string> {
  constructor(public ctx?: StringLiteralContext) {
    super();
    this.value = ctx?.StringLiteral().text.slice(1, -1).replace(/\\"/g, '"');
  }
}
