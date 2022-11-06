import { ExpressionFormatter, FormatterConfig } from '~/formatter';
import { PreprocessorExpressionContext } from '~/grammar';
import { String2 } from '~/lib';

export class PreprocessorExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: PreprocessorExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return this.ctx.text;
  }
}
