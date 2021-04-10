import { CharLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class CharLiteralTree extends LiteralTree {
  public value: string;

  public constructor(public ctx?: CharLiteralContext) {
    super();
    if (!ctx) return;

    const STRING_START = 1;
    const STRING_END = -1;
    this.value = this.ctx.text.slice(STRING_START, STRING_END).replace(/\\'/g, "'");
  }
}
