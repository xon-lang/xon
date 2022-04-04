import { InvokeExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getParametersFormatter } from '../../parameters/parameters-formatter-helper';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { MemberExpressionFormatter } from '../member/member-expression-formatter';

export class InvokeExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: InvokeExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const expression = getExpressionFormatter(this.ctx.expression(), this.config).indent(
      this.indentCount,
    );

    const parameters = getParametersFormatter(this.ctx.parameters(), this.config).indent(
      this.indentCount,
    );

    if (this.broken && expression instanceof MemberExpressionFormatter) {
      expression.break(true);
      parameters.indent(this.indentCount + 1);
    }

    const endLineLength = this.config.endLineLength(expression.toString());
    const startLineLength = this.config.endLineLength(parameters.toString());

    if (endLineLength + startLineLength > this.config.printWidth) {
      this.broken = true;
      parameters.break(true);
    }

    return expression + parameters.toString();
  }
}
