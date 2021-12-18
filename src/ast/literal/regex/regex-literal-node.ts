import { RegexLiteralContext } from '../../../grammar/xon-parser';
import { LiteralNode } from '../literal-node';

export class RegexLiteralNode extends LiteralNode {
  value: RegExp;
  pattern: string;

  constructor(public ctx: RegexLiteralContext) {
    super();

    this.pattern = ctx.text.slice(1, -1).replace(/\\\//g, '/');
    this.value = new RegExp(this.pattern, 'g');
  }

  toString(): string {
    return `\`${this.pattern}\``;
  }
}
