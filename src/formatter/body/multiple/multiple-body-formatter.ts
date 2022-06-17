import { MultipleBodyContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { FormatterConfig } from '../../formatter-config';
import { NlStatementFormatter } from '../../statement/nl/nl-statement-formatter';
import { getStatementFormatter } from '../../statement/statement-formatter-helper';
import { BodyFormatter } from '../body-formatter';

export class MultipleBodyFormatter extends BodyFormatter {
  constructor(public ctx: MultipleBodyContext, public config: FormatterConfig) {
    super();
  }

  toString(): String {
    const statements = this.ctx
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
