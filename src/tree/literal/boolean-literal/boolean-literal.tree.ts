import { BooleanLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class BooleanLiteralTree extends LiteralTree {
  ctx: BooleanLiteralContext;

  private value: boolean;

  getValue(): boolean {
    if (typeof this.value !== 'undefined') return this.value;
    this.value = this.ctx.text === 'true';
    return this.value;
  }
}
