import { FormatterConfig, getParameterFormatter, StatementFormatter } from '~/formatter';
import { DeclarationStatementContext } from '~/grammar';
import { String2 } from '~/lib';

export class DeclarationStatementFormatter extends StatementFormatter {
  constructor(public ctx: DeclarationStatementContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return getParameterFormatter(this.ctx.declaration(), this.config)
      .indent(this.indentCount)
      .toString();
  }
}
