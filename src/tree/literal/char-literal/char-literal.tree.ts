import { CharLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class CharLiteralTree extends LiteralTree {
  public ctx: CharLiteralContext;

  private value: string;

  public getValue(): string {
    if (typeof this.value !== 'undefined') return this.value;
    this.value = this.ctx?.CharLiteral().text.slice(1, -1).replace(/\\'/g, "'");
    return this.value;
  }
}
