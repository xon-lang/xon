import { ForStatementContext } from '../../../grammar/xon-parser';
import { getBodyFormatter } from '../../body/body-formatter-helper';
import { getExpressionFormatter } from '../../expression/expression-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { getParameterFormatter } from '../../parameter/parameter-formatter-helper';
import { StatementFormatter } from '../Statement-formatter';

export class ForStatementFormatter extends StatementFormatter {
  constructor(public ctx: ForStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const value = getParameterFormatter(this.ctx._value, this.config)?.indent(this.indentCount);
    const index = getParameterFormatter(this.ctx._index, this.config)?.indent(this.indentCount);
    let vars = [value, index]
      .filter(Boolean)
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
