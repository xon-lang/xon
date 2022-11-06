import { ExpressionFormatter, FormatterConfig, getArgumentsFormatter } from '~/formatter';
import { ArrayExpressionContext } from '~/grammar';

export class ArrayExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: ArrayExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return getArgumentsFormatter(this.ctx.arguments(), this.config)
      .indent(this.indentCount)
      .break(this.broken)
      .toString();
  }
}
