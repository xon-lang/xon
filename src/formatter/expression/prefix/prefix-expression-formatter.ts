import { ExpressionFormatter } from '~/formatter/expression/expression-formatter';
import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { FormatterConfig } from '~/formatter/formatter-config';
import { PrefixExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class PrefixExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: PrefixExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    const operator = (this.ctx.OP() && this.ctx._op.text) || this.ctx._op.text + ' ';
    const value = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken);

    return `${operator}${value}`;
  }
}
