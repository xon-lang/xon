import { ExpressionFormatter, FormatterConfig, getExpressionFormatter } from '~/formatter';
import { GroupExpressionContext } from '~/grammar';
import { String2 } from '~/lib';

export class GroupExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: GroupExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return `(${getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken)})`;
  }
}
