import { ExpressionFormatter } from '~/formatter/expression/expression-formatter';
import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { FormatterConfig } from '~/formatter/formatter-config';
import { NullableExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class NullableExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: NullableExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return `${getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken)}?`;
  }
}
