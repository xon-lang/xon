import { ExpressionFormatter, FormatterConfig, getArgumentsFormatter } from '~/formatter';
import { ArrayExpressionContext } from '~/grammar';
import { String2 } from '~/lib';

export class ArrayExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: ArrayExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return getArgumentsFormatter(this.ctx.arguments(), this.config)
      .indent(this.indentCount)
      .break(this.broken)
      .toString();
  }
}
