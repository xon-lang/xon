import { ExpressionStatementContext } from '../../../grammar/xon-parser';
import { getExpressionFormatter } from '../../expression/expression-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

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
