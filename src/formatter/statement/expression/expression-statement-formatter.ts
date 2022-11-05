import { getExpressionFormatter } from '@/formatter/expression/expression-formatter-helper';
import { FormatterConfig } from '@/formatter/formatter-config';
import { StatementFormatter } from '@/formatter/statement/Statement-formatter';
import { ExpressionStatementContext } from '@/grammar/xon-parser';

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
