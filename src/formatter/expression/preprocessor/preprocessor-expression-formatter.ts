import { ExpressionFormatter } from '~/formatter/expression/expression-formatter';
import { FormatterConfig } from '~/formatter/formatter-config';
import { PreprocessorExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class PreprocessorExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: PreprocessorExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return this.ctx.text;
  }
}
