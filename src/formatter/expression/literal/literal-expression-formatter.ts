import { ExpressionFormatter } from '@/formatter/expression/expression-formatter';
import { FormatterConfig } from '@/formatter/formatter-config';
import { LiteralExpressionContext } from '@/grammar/xon-parser';

export class LiteralExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: LiteralExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    return this.ctx.text;
  }
}
