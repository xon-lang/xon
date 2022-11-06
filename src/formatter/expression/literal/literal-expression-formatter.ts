import { ExpressionFormatter, FormatterConfig } from '~/formatter';
import { LiteralExpressionContext } from '~/grammar';
import { String2 } from '~/lib';

export class LiteralExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: LiteralExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return this.ctx.text;
  }
}
