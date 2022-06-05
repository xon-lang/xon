import { SingleBodyContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../../statement/statement-formatter-helper';
import { BodyFormatter } from '../body-formatter';

export class SingleBodyFormatter extends BodyFormatter {
  constructor(public ctx: SingleBodyContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const statement = getStatementFormatter(this.ctx.statement(), this.config)
      .indent(this.indentCount)
      .break(this.broken);
    return `= ${statement}`;
  }
}
