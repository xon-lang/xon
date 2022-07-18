import { ForStatementContext } from '../../../grammar/xon-parser';
import { getBodyFormatter } from '../../body/body-formatter-helper';
import { getParameterFormatter } from '../../declaration/declaration-formatter-helper';
import { getExpressionFormatter } from '../../expression/expression-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

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
    vars = vars && vars + ' in ';
    const expression = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .toString()
      .trim();
    const body = getBodyFormatter(this.ctx.body(), this.config).indent(this.indentCount);
    return `for ${vars}${expression}${body}`;
  }
}
