import { ExpressionFormatter } from '~/formatter/expression/expression-formatter';
import { FormatterConfig } from '~/formatter/formatter-config';
import { IdExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class IdExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: IdExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return this.ctx.text;
  }
}
