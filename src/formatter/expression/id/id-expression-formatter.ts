import { ExpressionFormatter, FormatterConfig } from '~/formatter';
import { IdExpressionContext } from '~/grammar';

export class IdExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: IdExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return this.ctx.text;
  }
}
