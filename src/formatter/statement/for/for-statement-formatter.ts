import { getBodyFormatter } from '@/formatter/body/body-formatter-helper';
import { getParameterFormatter } from '@/formatter/declaration/declaration-formatter-helper';
import { getExpressionFormatter } from '@/formatter/expression/expression-formatter-helper';
import { FormatterConfig } from '@/formatter/formatter-config';
import { StatementFormatter } from '@/formatter/statement/Statement-formatter';
import { ForStatementContext } from '@/grammar/xon-parser';

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
