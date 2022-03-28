import { IdExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';

export class IdExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: IdExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const result = this.indentString + this.ctx.text;
    return result;
  }
}
