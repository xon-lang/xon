import { ExpressionFormatter } from '~/formatter/expression/expression-formatter';
import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { FormatterConfig } from '~/formatter/formatter-config';
import { InfixExpressionContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class InfixExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: InfixExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    const operator = this.ctx.operator().text;
    const left = getExpressionFormatter(this.ctx._left, this.config)
      ?.indent(this.indentCount)
      .break(this.broken);
    const right = getExpressionFormatter(this.ctx._right, this.config)
      ?.indent(this.indentCount)
      .break(this.broken);
    if (operator === '^') {
      return `${left}${operator}${right}`;
    }

    return `${left ?? ''} ${operator} ${right ?? ''}`;
  }
}
