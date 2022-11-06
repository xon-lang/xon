import { ExpressionFormatter, FormatterConfig, getExpressionFormatter } from '~/formatter';
import { NullableExpressionContext } from '~/grammar';
import { String2 } from '~/lib';

export class NullableExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: NullableExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return `${getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken)}?`;
  }
}
