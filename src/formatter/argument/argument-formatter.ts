import { getExpressionFormatter } from '@/formatter/expression/expression-formatter-helper';
import { Formatter } from '@/formatter/formatter';
import { FormatterConfig } from '@/formatter/formatter-config';
import { ArgumentContext } from '@/grammar/xon-parser';

export class ArgumentFormatter extends Formatter {
  constructor(public ctx: ArgumentContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const value = getExpressionFormatter(this.ctx.expression(), this.config)
      .break(this.broken)
      .indent(this.indentCount);
    if (this.ctx._name) {
      return `${this.ctx._name.text} = ` + value;
    }
    return value.toString();
  }
}
