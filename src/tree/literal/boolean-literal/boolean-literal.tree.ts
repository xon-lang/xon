import { BooleanLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class BooleanLiteralTree extends LiteralTree<boolean> {
  isPositive: boolean;

  constructor(public ctx: BooleanLiteralContext) {
    super();
    this.isPositive = ctx.text === 'true';
    this.value = this.isPositive;
  }
}
