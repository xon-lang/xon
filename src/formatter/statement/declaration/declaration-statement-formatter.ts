import { DeclarationStatementContext } from '../../../grammar/xon-parser';
import { getParameterFormatter } from '../../declaration/declaration-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

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
