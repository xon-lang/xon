import { getDeclarationsFormatter } from '@/formatter/declarations/declarations-formatter-helper';
import { ExpressionFormatter } from '@/formatter/expression/expression-formatter';
import { getExpressionFormatter } from '@/formatter/expression/expression-formatter-helper';
import { FormatterConfig } from '@/formatter/formatter-config';
import { MethodExpressionContext } from '@/grammar/xon-parser';

export class MethodExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: MethodExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const value = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken);

    const parametersGroup = this.ctx
      .declarations()
      .map((x) =>
        getDeclarationsFormatter(x, this.config).indent(this.indentCount).break(this.broken),
      )
      .join('');
    return `${parametersGroup} => ${value}`;
  }
}
