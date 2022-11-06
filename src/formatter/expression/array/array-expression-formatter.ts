import { getArgumentsFormatter } from '~/formatter/arguments/arguments-formatter-helper';
import { ExpressionFormatter } from '~/formatter/expression/expression-formatter';
import { FormatterConfig } from '~/formatter/formatter-config';
import { ArrayExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class ArrayExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: ArrayExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return getArgumentsFormatter(this.ctx.arguments(), this.config)
      .indent(this.indentCount)
      .break(this.broken)
      .toString();
  }
}
