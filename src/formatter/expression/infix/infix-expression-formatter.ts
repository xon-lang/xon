import { InfixExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';

export class InfixExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: InfixExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const operator = this.ctx._op.text;
    const left = getExpressionFormatter(this.ctx._left, this.config).indent(this.indentCount);
    const right = getExpressionFormatter(this.ctx._right, this.config).indent(this.indentCount);
    if (operator === '^') {
      return `${left}${operator}${right}`;
    }
    return `${left} ${operator} ${right}`;
  }
}
