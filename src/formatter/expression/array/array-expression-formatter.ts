import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { getArgumentsFormatter } from '../../arguments/arguments-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';

export class ArrayExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: ArrayExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return getArgumentsFormatter(this.ctx.arguments(), this.config)
      .indent(this.indentCount)
      .break(this.broken)
      .toString();
  }
}
