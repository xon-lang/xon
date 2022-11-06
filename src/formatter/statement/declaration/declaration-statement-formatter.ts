import { getParameterFormatter } from '~/formatter/declaration/declaration-formatter-helper';
import { FormatterConfig } from '~/formatter/formatter-config';
import { StatementFormatter } from '~/formatter/statement/statement-formatter';
import { DeclarationStatementContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

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
