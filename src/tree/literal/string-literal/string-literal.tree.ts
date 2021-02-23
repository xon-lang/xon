import { StringLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class StringLiteralTree extends LiteralTree {
  public value: string;

  public constructor(public ctx: StringLiteralContext) {
    super();
    this.value = this.ctx?.StringLiteral().text.slice(1, -1).replace(/\\"/g, '"');
  }
}
