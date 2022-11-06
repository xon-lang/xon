import { FormatterConfig, getExpressionFormatter, StatementFormatter } from '~/formatter';
import { ExpressionStatementContext } from '~/grammar';

export class ExpressionStatementFormatter extends StatementFormatter {
  constructor(public ctx: ExpressionStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const expression = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken);
    return expression.toString();
  }
}
