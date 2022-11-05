import { getParameterFormatter } from '@/formatter/declaration/declaration-formatter-helper';
import { FormatterConfig } from '@/formatter/formatter-config';
import { StatementFormatter } from '@/formatter/statement/Statement-formatter';
import { DeclarationStatementContext } from '@/grammar/xon-parser';

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
