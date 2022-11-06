import { ExpressionFormatter, FormatterConfig, getExpressionFormatter } from '~/formatter';
import { GroupExpressionContext } from '~/grammar';

export class GroupExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: GroupExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return `(${getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken)})`;
  }
}
