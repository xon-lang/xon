import { MultipleBodyContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../../statement/statement-formatter-helper';
import { BodyFormatter } from '../body-formatter';

export class MultipleBodyFormatter extends BodyFormatter {
  constructor(public ctx: MultipleBodyContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const statementIndent = this.config.indent(this.indentCount + 1);
    const statements = this.ctx
      .statement()
      .map(
        (x) => statementIndent + getStatementFormatter(x, this.config).indent(this.indentCount + 1),
      )
      .join(this.config.nl);
    return `${this.config.nl}${statements}`;
  }
}
