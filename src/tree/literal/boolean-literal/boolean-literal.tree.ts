import { BooleanLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class BooleanLiteralTree extends LiteralTree {
  public value: boolean;

  public constructor(public ctx?: BooleanLiteralContext) {
    super();
    if (!ctx) return;

    this.value = this.ctx.text === 'true';
  }
}
