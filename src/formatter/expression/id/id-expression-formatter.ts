import { ExpressionFormatter, FormatterConfig } from '~/formatter';
import { IdExpressionContext } from '~/grammar';
import { String2 } from '~/lib';

export class IdExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: IdExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return this.ctx.text;
  }
}
