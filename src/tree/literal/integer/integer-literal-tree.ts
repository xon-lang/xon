import { IntegerLiteralContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../literal-tree';

export class IntegerLiteralTree implements LiteralTree {
  sourceReference: SourceRange;
  radix: number;
  integer: string;
  value: number;

  constructor(ctx: IntegerLiteralContext) {
    this.sourceReference = SourceRange.fromContext(ctx);
    const [integer, radix] = ctx.text.split('x').reverse();
    this.integer = integer;
    this.radix = +radix;

    this.value = parseInt(this.integer.replace(/_/g, ''), this.radix);
  }
}
