import { IntegerLiteralContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { LiteralNode } from '../literal-node';

export class IntegerLiteralNode implements LiteralNode {
  sourceReference: SourceReference;
  radix: number;
  integer: string;
  value: number;

  constructor(public ctx: IntegerLiteralContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);
    const [integer, radix] = ctx.text.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;

    this.value = parseInt(this.integer.replace(/_/g, ''), this.radix);
  }

  toString(): string {
    return `${this.value}`;
  }
}
