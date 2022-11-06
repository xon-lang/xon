import { FormatterConfig, getBodyFormatter, getExpressionFormatter, getParameterFormatter, StatementFormatter } from '~/formatter';
import { ForStatementContext } from '~/grammar';

export class ForStatementFormatter extends StatementFormatter {
  constructor(public ctx: ForStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const parameter = getParameterFormatter(this.ctx.declaration(), this.config)?.indent(
      this.indentCount,
    );
    let vars = [parameter]
      .filter((x) => x)
      .map((x) => x?.toString().trim())
      .join(', ');
    vars &&= vars + ' in ';
    const expression = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .toString()
      .trim();
    const body = getBodyFormatter(this.ctx.body(), this.config).indent(this.indentCount);
    return `for ${vars}${expression}${body}`;
  }
}
