import { ParameterStatementContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getParameterFormatter } from '../../parameter/parameter-formatter-helper';
import { StatementFormatter } from '../Statement-formatter';

export class ParameterStatementFormatter extends StatementFormatter {
  constructor(public ctx: ParameterStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const parameter = getParameterFormatter(this.ctx.parameter(), this.config).indent(
      this.indentCount,
    );
    return parameter.toString();
  }
}
