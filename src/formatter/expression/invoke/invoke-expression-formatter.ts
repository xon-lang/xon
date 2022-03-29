import { InvokeExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getParametersFormatter } from '../../parameters/parameters-formatter-helper';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';

export class InvokeExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: InvokeExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const expression = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .breakMember(this.broken || this.brokenMember);

    const parameters = getParametersFormatter(this.ctx.parameters(), this.config).indent(
      this.indentCount,
    );

    const isLargeLength = () => {
      if (expression.brokenMember) {
        parameters.indent(this.indentCount + 1);
      }
      const endLineLength = this.config.endLineLength(expression.toString());
      const startLineLength = this.config.endLineLength(parameters.toString());
      return endLineLength + startLineLength > this.config.printWidth;
    };

    if (isLargeLength()) {
      expression.breakMember(true);
    }

    if (isLargeLength()) {
      parameters.break(true);
    }

    if (expression.brokenMember) {
      parameters.indent(this.indentCount + 1);
    }

    return expression + parameters.toString();
  }

  // private isExpressionHasProperty(expression: ExpressionContext) {
  //   if (expression instanceof MemberExpressionContext) return true;
  //   if (expression instanceof InvokeExpressionContext)
  //     return this.isExpressionHasProperty(expression.expression());
  //   return false;
  // }
}
