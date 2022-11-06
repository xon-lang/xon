import { ExpressionFormatter } from '~/formatter/expression/expression-formatter';
import { FormatterConfig } from '~/formatter/formatter-config';
import { LiteralExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class LiteralExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: LiteralExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return this.ctx.text;
  }
}
