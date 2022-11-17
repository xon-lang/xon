import { getBodyFormatter } from '~/formatter/body/body-formatter-helper';
import { getParameterFormatter } from '~/formatter/declaration/declaration-formatter-helper';
import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { FormatterConfig } from '~/formatter/formatter-config';
import { StatementFormatter } from '~/formatter/statement/statement-formatter';
import { ForStatementContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class ForStatementFormatter extends StatementFormatter {
  constructor(public ctx: ForStatementContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    const parameter = getParameterFormatter(this.ctx.declaration() ?? null, this.config)?.indent(
      this.indentCount,
    );
    let vars = [parameter]
      .filter((x) => x)
      .map((x) => x?.toString().trim())
      .join(', ');
    vars &&= vars + ' in ';
    const expression = getExpressionFormatter(this.ctx.expression(), this.config)
      ?.indent(this.indentCount)
      .toString()
      .trim();
    const body = getBodyFormatter(this.ctx.body(), this.config)?.indent(this.indentCount);
    return `for ${vars}${expression}${body}`;
  }
}
