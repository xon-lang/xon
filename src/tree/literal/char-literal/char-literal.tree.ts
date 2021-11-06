import { CharLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class CharLiteralTree extends LiteralTree {
  value: string;
  
  constructor(public ctx?: CharLiteralContext) {
    super();
    if (!ctx) return;

    const STRING_START = 1;
    const STRING_END = -1;
    this.value = ctx.text.slice(STRING_START, STRING_END).replace(/\\'/g, "'");
  }

  toString(): string {
    return `'${this.value}'`;
  }
}
