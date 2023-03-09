import { FloatExpressionContext } from '~/grammar/xon-parser';
import { Float, Integer, String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { ExpressionTree } from '~/tree/expression/expression-tree';

export class FloatExpressionTree extends ExpressionTree {
  stringValue: String2;
  radix: Integer;
  integer: String2;
  fraction: String2;
  value: Float;

  constructor(ctx: FloatExpressionContext) {
    super(SourceSpan.fromContext(ctx));
    this.stringValue = ctx.text;
    [this.integer, this.fraction] = ctx.text.split('.');
    const [integer, radix] = this.integer.split('x').reverse();
    this.integer = integer;
    this.radix = Number(radix);

    const integerClean = this.integer.replace(/_/gu, '');
    const fraction = this.fraction.replace(/_/gu, '');

    this.value =
      (this.radix &&
        parseInt(integerClean, this.radix) + parseInt(fraction, this.radix) / this.radix ** fraction.length) ||
      parseFloat(`${integerClean}.${fraction}`);
  }

  public toString(): String2 {
    return `<float>'${this.stringValue}'`;
  }
}
