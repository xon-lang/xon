import { ExpressionFormatter } from '@/formatter/expression/expression-formatter';
import { FormatterConfig } from '@/formatter/formatter-config';
import { PreprocessorExpressionContext } from '@/grammar/xon-parser';

export class PreprocessorExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: PreprocessorExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return this.ctx.text;
  }
}
