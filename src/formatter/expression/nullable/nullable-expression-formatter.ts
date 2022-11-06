import { ExpressionFormatter, FormatterConfig, getExpressionFormatter } from '~/formatter';
import { NullableExpressionContext } from '~/grammar';

export class NullableExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: NullableExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return `${getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken)}?`;
  }
}
