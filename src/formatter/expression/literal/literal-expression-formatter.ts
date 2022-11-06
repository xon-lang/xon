import { ExpressionFormatter, FormatterConfig } from '~/formatter';
import { LiteralExpressionContext } from '~/grammar';

export class LiteralExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: LiteralExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return this.ctx.text;
  }
}
