import { StringLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class StringLiteralTree extends LiteralTree {
  ctx: StringLiteralContext;

  private value: string;

  getValue(): string {
    if (typeof this.value !== 'undefined') return this.value;
    this.value = this.ctx?.StringLiteral().text.slice(1, -1).replace(/\\"/g, '"');
    return this.value;
  }
}
