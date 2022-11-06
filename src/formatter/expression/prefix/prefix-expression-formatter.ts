import { ExpressionFormatter, FormatterConfig, getExpressionFormatter } from '~/formatter';
import { PrefixExpressionContext } from '~/grammar';

export class PrefixExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: PrefixExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const operator = (this.ctx.OP() && this.ctx._op.text) || this.ctx._op.text + ' ';
    const value = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken);

    return `${operator}${value}`;
  }
}
