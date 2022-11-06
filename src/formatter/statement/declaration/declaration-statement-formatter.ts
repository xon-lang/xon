import { FormatterConfig, getParameterFormatter, StatementFormatter } from '~/formatter';
import { DeclarationStatementContext } from '~/grammar';

export class DeclarationStatementFormatter extends StatementFormatter {
  constructor(public ctx: DeclarationStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return getParameterFormatter(this.ctx.declaration(), this.config)
      .indent(this.indentCount)
      .toString();
  }
}
