import { ExpressionFormatter } from '@/formatter/expression/expression-formatter';
import { FormatterConfig } from '@/formatter/formatter-config';
import { IdExpressionContext } from '@/grammar/xon-parser';

export class IdExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: IdExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return this.ctx.text;
  }
}
