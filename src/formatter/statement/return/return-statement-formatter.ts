import { ReturnStatementContext } from '../../../grammar/xon-parser';
import { getExpressionFormatter } from '../../expression/expression-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

export class ReturnStatementFormatter extends StatementFormatter {
  constructor(public ctx: ReturnStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const value = getExpressionFormatter(this.ctx.expression(), this.config)?.indent(
      this.indentCount,
    );
    let result = `return`;
    if (value) {
      result += ' ' + value.toString().trim();
    }
    if (result.length > this.config.printWidth && value) {
      result = `return ${value.break(true).toString().trim()}`;
    }
    return result;
  }
}
