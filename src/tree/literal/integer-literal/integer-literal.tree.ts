import { IntegerLiteralContext } from '../../../grammar/xon-parser';
import { LiteralTree } from '../literal.tree';

export class IntegerLiteralTree extends LiteralTree {
  public radix: number;

  public integer: string;

  public value: number;

  public constructor(public ctx: IntegerLiteralContext) {
    super();
    const text = ctx.IntegerLiteral().text.replace(/x/i, 'x');
    const [integer, radix] = text.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;

    this.value = parseInt(this.integer.replace(/_/g, ''), this.radix);
  }
}
