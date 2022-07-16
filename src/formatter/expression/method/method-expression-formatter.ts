import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getParametersFormatter } from '../../parameters/parameters-formatter-helper';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';

export class MethodExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: MethodExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const value = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken);

    const parametersGroup = this.ctx
      .parameters()
      .map((x) =>
        getParametersFormatter(x, this.config).indent(this.indentCount).break(this.broken),
      )
      .join('');
    return `${parametersGroup} => ${value}`;
  }
}
