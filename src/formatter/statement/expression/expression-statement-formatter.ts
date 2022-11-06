import { FormatterConfig, getExpressionFormatter, StatementFormatter } from '~/formatter';
import { ExpressionStatementContext } from '~/grammar';
import { String2 } from '~/lib';

export class ExpressionStatementFormatter extends StatementFormatter {
  constructor(public ctx: ExpressionStatementContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    const expression = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken);
    return expression.toString();
  }
}
