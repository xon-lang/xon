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
    const expressionString = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .break(this.broken)
      .breakMember(this.brokenMember)
      .toString();
    const parameters = getParametersFormatter(this.ctx.parameters(), this.config).indent(
      this.indentCount,
    );
    let joinedParameters = parameters.toString();
    let result = expressionString + joinedParameters;
    const endLineCharPosition = this.config.endLineCharPosition(expressionString);

    if (this.broken || endLineCharPosition + joinedParameters.length > this.config.printWidth) {
      joinedParameters = parameters.break(true).toString();
      result = expressionString + joinedParameters;
    }

    return result;
  }
}
