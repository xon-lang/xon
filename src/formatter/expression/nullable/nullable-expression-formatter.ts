import { NullableExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';

export class NullableExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: NullableExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const result = `${this.indentString}${getExpressionFormatter(
      this.ctx.expression(),
      this.config,
    )}?`;
    return result;
  }
}
