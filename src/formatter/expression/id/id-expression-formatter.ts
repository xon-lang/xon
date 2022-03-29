import { IdExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';

export class IdExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: IdExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return this.ctx.text;
  }
}
