import { CharLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class CharLiteralTree extends LiteralTree<string> {
  constructor(public ctx?: CharLiteralContext) {
    super();
    this.value = ctx?.CharLiteral().text.slice(1, -1).replace(/\\'/g, "'");
  }
}
