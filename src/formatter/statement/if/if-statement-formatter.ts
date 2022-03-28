import { IfStatementContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';
import { getStatementFormatter } from '../Statement-formatter-helper';

export class IfStatementFormatter extends StatementFormatter {
  constructor(public ctx: IfStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const result = `${this.indentString}${getStatementFormatter(this.ctx.expr(), this.config)}?`;
    return result;
  }
}
