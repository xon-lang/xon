import { StringLiteralContext } from '../../../grammar/xon-parser';
import { LiteralNode } from '../literal-node';

export class StringLiteralNode extends LiteralNode {
  value: string;

  constructor(public ctx: StringLiteralContext) {
    super();

    const QUOTE_START = 1;
    const QUOTE_END = -1;
    this.value = ctx.text.slice(QUOTE_START, QUOTE_END).replace(/\\"/g, '"');
  }

  toString(): string {
    return `"${this.value}"`;
  }
}
