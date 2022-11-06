import { IntegerLiteralContext } from '~/grammar';
import { Number2, String2 } from '~/lib';
import { LiteralTree } from '~/tree';
import { SourceRange } from '~/util';

export class IntegerLiteralTree extends LiteralTree {
  sourceRange: SourceRange;
  radix: Number2;
  integer: String2;
  value: Number2;

  constructor(ctx: IntegerLiteralContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    const [integer, radix] = ctx.text.split('x').reverse();
    this.integer = integer;
    this.radix = Number(radix);

    this.value = parseInt(this.integer.replace(/_/g, ''), this.radix);
  }
}
