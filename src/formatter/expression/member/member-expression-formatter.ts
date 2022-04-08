import { MemberExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';

export class MemberExpressionFormatter extends ExpressionFormatter {
  broken: boolean;

  constructor(public ctx: MemberExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const expression = getExpressionFormatter(this.ctx.expression(), this.config).indent(
      this.indentCount,
    );
    const name = this.ctx._name.text;

    let result = `${expression}.${name}`;

    if (this.broken || this.config.endLineLength(result) > this.config.printWidth) {
      this.broken = true;
      result = expression.break(true) + `\n${this.config.indent(this.indentCount + 1)}.${name}`;
    }

    return result;
  }
}
