import { IntegerExpressionContext } from '~/grammar/xon-parser';
import { Integer, String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class IntegerExpressionTree extends ExpressionTree {
  stringValue: String2;
  radix: Integer;
  integer: String2;
  value: Integer;

  constructor(ctx: IntegerExpressionContext) {
    super(SourceSpan.fromContext(ctx));
    this.stringValue = ctx.text;
    const [integer, radix] = ctx.text.split('x').reverse();
    this.integer = integer;
    this.radix = Number(radix);
    this.value = parseInt(this.integer.replace(/_/gu, ''), this.radix);
  }

  public toString(): String2 {
    return `<integer>'${this.stringValue}'`;
  }
}
