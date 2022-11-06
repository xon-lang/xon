import { ExpressionFormatter, FormatterConfig } from '~/formatter';
import { PreprocessorExpressionContext } from '~/grammar';

export class PreprocessorExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: PreprocessorExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return this.ctx.text;
  }
}
