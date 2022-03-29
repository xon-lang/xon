import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getParametersFormatter } from '../../parameters/parameters-formatter-helper';
import { ExpressionFormatter } from '../expression-formatter';

export class ArrayExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: ArrayExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return getParametersFormatter(this.ctx.parameters(), this.config)
      .indent(this.indentCount)
      .break(this.broken)
      .toString();
  }
}
