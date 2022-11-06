import { ExpressionFormatter, FormatterConfig, getExpressionFormatter } from '~/formatter';
import { MemberExpressionContext } from '~/grammar';
import { Boolean2 } from '~/lib';

export class MemberExpressionFormatter extends ExpressionFormatter {
  broken: Boolean2;

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
