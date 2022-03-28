import { MultipleBodyContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../../statement/statement-formatter-helper';
import { BodyFormatter } from '../body-formatter';

export class MultipleBodyFormatter extends BodyFormatter {
  constructor(public ctx: MultipleBodyContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const statements = this.ctx
      .statement()
      .map((x) => getStatementFormatter(x, this.config).indent(this.indentCount + 1))
      .join(this.config.nl);
    return `${this.config.nl}${statements}`;
  }
}
