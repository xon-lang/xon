import { ExpressionFormatter } from '~/formatter/expression/expression-formatter';
import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { FormatterConfig } from '~/formatter/formatter-config';
import { MemberExpressionContext } from '~/grammar/xon-parser';
import { Boolean2, String2 } from '~/lib/core';

export class MemberExpressionFormatter extends ExpressionFormatter {
  broken: Boolean2;

  constructor(public ctx: MemberExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
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
