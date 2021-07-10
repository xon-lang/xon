import { StringLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class StringLiteralTree extends LiteralTree {
  public value: string;

  public constructor(public ctx?: StringLiteralContext) {
    super();
    if (!ctx) return;

    const QUOTE_START = 1;
    const QUOTE_END = -1;
    this.value = ctx.text.slice(QUOTE_START, QUOTE_END).replace(/\\"/g, '"');
  }

  public toString(): string {
    return `"${this.value}"`;
  }
}
