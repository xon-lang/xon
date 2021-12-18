import { CharLiteralContext } from '../../../grammar/xon-parser';
import { LiteralNode } from '../literal-node';

export class CharLiteralNode extends LiteralNode {
  value: string;

  constructor(public ctx: CharLiteralContext) {
    super();

    const STRING_START = 1;
    const STRING_END = -1;
    this.value = ctx.text.slice(STRING_START, STRING_END).replace(/\\'/g, "'");
  }

  toString(): string {
    return `'${this.value}'`;
  }
}
