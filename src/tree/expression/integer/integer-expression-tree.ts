import { IntegerExpressionContext } from '~/grammar/xon-parser';
import { Integer, String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class IntegerExpressionTree extends ExpressionTree {
  sourceSpan: SourceSpan;
  radix: Integer;
  integer: String2;
  value: Integer;

  constructor(ctx: IntegerExpressionContext) {
    super();
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const [integer, radix] = ctx.text.split('x').reverse();
    this.integer = integer;
    this.radix = Number(radix);

    this.value = parseInt(this.integer.replace(/_/gu, ''), this.radix);
  }
}
