import { Formatter, FormatterConfig, getExpressionFormatter } from '~/formatter';
import { ArgumentContext } from '~/grammar';
import { String2 } from '~/lib';

export class ArgumentFormatter extends Formatter {
  constructor(public ctx: ArgumentContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    const value = getExpressionFormatter(this.ctx.expression(), this.config)
      .break(this.broken)
      .indent(this.indentCount);
    if (this.ctx._name) {
      return `${this.ctx._name.text} = ` + value;
    }
    return value.toString();
  }
}
