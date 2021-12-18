import { IntegerLiteralContext } from '../../../grammar/xon-parser';
import { LiteralNode } from '../literal-node';

export class IntegerLiteralNode extends LiteralNode {
  radix: number;
  integer: string;
  value: number;

  constructor(public ctx: IntegerLiteralContext) {
    super();

    const [integer, radix] = ctx.text.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;

    this.value = parseInt(this.integer.replace(/_/g, ''), this.radix);
  }

  toString(): string {
    return `${this.value}`;
  }
}
