import { ExpressionFormatter, FormatterConfig, getExpressionFormatter } from '~/formatter';
import { InfixExpressionContext } from '~/grammar';

export class InfixExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: InfixExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const operator = this.ctx.operator().text;
    const left = getExpressionFormatter(this.ctx._left, this.config)
      .indent(this.indentCount)
      .break(this.broken);
    const right = getExpressionFormatter(this.ctx._right, this.config)
      .indent(this.indentCount)
      .break(this.broken);
    if (operator === '^') {
      return `${left}${operator}${right}`;
    }
    return `${left} ${operator} ${right}`;
  }
}
