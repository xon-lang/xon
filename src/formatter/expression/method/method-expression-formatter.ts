import { MethodExpressionContext } from '../../../grammar/xon-parser';
import { getDeclarationsFormatter } from '../../declarations/declarations-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
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
      .declarations()
      .map((x) =>
        getDeclarationsFormatter(x, this.config).indent(this.indentCount).break(this.broken),
      )
      .join('');
    return `${parametersGroup} => ${value}`;
  }
}
