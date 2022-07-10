import { DeclarationStatementContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getParameterFormatter } from '../../parameter/parameter-formatter-helper';
import { StatementFormatter } from '../Statement-formatter';

export class DeclarationStatementFormatter extends StatementFormatter {
  constructor(public ctx: DeclarationStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return getParameterFormatter(this.ctx.parameter(), this.config)
      .indent(this.indentCount)
      .toString();
  }
}
