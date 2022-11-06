import {
  ExpressionFormatter,
  FormatterConfig,
  getDeclarationsFormatter,
  getExpressionFormatter,
} from '~/formatter';
import { MethodExpressionContext } from '~/grammar';
import { String2 } from '~/lib';

export class MethodExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: MethodExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
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
