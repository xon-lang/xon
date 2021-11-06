import { BooleanLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class BooleanLiteralTree extends LiteralTree {
  value: boolean;
  
  constructor(public ctx?: BooleanLiteralContext) {
    super();
    if (!ctx) return;

    this.value = ctx.text === 'true';
  }

  toString(): string {
    return `${this.value}`;
  }
}
