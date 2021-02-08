import { IntegerLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class IntegerLiteralTree extends LiteralTree<number> {
  radix: number;

  integer: string;

  constructor(public ctx: IntegerLiteralContext) {
    super();
    const text = ctx.IntegerLiteral().text.replace(/_/g, '');
    const [integer, radix] = text.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;

    this.value = parseInt(this.integer, this.radix);
  }
}
