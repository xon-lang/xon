import { BodyContext } from '../../grammar/xon-parser';
import { String } from '../../lib/core';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';
import { NlStatementFormatter } from '../statement/nl/nl-statement-formatter';
import { getStatementFormatter } from '../statement/statement-formatter-helper';

export class BodyFormatter extends Formatter {
  constructor(public ctx: BodyContext, public config: FormatterConfig) {
    super();
  }

  toString(): String {
    const statements = this.ctx
      .source()
      .statement()
      .map((x) => {
        const indent = this.config.indent(this.indentCount + 1);
        const statementFormatter = getStatementFormatter(x, this.config).indent(
          this.indentCount + 1,
        );
        if (statementFormatter instanceof NlStatementFormatter) {
          return statementFormatter.toString();
        }
        return indent + statementFormatter.toString();
      })
      .join('');
    return `${this.config.nl}${statements}`;
  }
}
