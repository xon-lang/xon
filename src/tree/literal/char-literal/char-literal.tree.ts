import { CharLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class CharLiteralTree extends LiteralTree {
  public value: string;

  public constructor(public ctx: CharLiteralContext) {
    super();
    this.value = this.ctx?.CharLiteral().text.slice(1, -1).replace(/\\'/g, "'");
  }
}
