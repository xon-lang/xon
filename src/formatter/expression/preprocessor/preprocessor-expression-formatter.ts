import { PreprocessorExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';

export class PreprocessorExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: PreprocessorExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return this.ctx.text;
  }
}
