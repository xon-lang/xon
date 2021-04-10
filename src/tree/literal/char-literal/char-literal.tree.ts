import { CharLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class CharLiteralTree extends LiteralTree {
  public value: string;

  public constructor(public ctx?: CharLiteralContext) {
    super();
    if (!ctx) return;

    this.value = this.ctx.text.slice(1, -1).replace(/\\'/g, "'");
  }
}
