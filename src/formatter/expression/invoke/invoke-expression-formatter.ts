import { InvokeExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getParameterFormatter } from '../../parameter/parameter-formatter-helper';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';

export class InvokeExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: InvokeExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const expression = getExpressionFormatter(this.ctx.expression(), this.config)
      .indent(this.indentCount)
      .breakMember(this.brokenMember);
    const expressionString = expression.toString();
    const parameters = this.ctx
      .parameters()
      .parameter()
      .map((x) => getParameterFormatter(x, this.config));

    let joinedParameters = this.surround(parameters.join(', '));
    let result = expressionString + joinedParameters;
    const endLineCharPosition = this.config.endLineCharPosition(expressionString);

    if (
      this.broken ||
      endLineCharPosition + joinedParameters.length > this.config.printWidth ||
      joinedParameters.includes(this.config.nl)
    ) {
      joinedParameters =
        parameters
          .map((x) => x.indent(this.indentCount + ((expression.broken && 2) || 1)))
          .join(',' + this.config.nl) + ((parameters.length > 1 && ',') || '');
      const surrounded = this.surround(
        this.config.nl +
          joinedParameters +
          this.config.nl +
          this.config.indent(this.indentCount + ((expression.broken && 1) || 0)),
      );
      result = expressionString + surrounded;
    }

    return result;
  }

  surround(text: String): String {
    const openSymbol = this.ctx.parameters()._openSymbol.text;
    const closeSymbol = this.ctx.parameters()._closeSymbol.text;
    return openSymbol + text + closeSymbol;
  }
}
