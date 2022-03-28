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
    const expression = getExpressionFormatter(this.ctx.expr(), this.config)
      .indent(this.indentCount)
      .breakMember(this.brokenMember);
    const parameters = this.ctx
      .parameters()
      .parameter()
      .map((x) => getParameterFormatter(x, this.config));

    let joinedParameters = parameters.join(', ');
    let result = expression.toString() + this.surround(joinedParameters);
    const endLineCharPosition = this.config.endLineCharPosition(result);

    if (
      this.broken ||
      endLineCharPosition > this.config.printWidth ||
      joinedParameters.includes(this.config.nl)
    ) {
      joinedParameters =
        parameters
          .map((x) => x.indent(this.indentCount + ((expression.broken && 2) || 1)))
          .join(',' + this.config.nl) + ',';
      const surrounded = this.surround(
        this.config.nl +
          joinedParameters +
          this.config.nl +
          this.config.indent(this.indentCount + ((expression.broken && 1) || 0)),
      );
      result = expression.toString() + surrounded;
    }

    return result;
  }

  surround(text: String): String {
    const openSymbol = this.ctx.parameters()._openSymbol.text;
    const closeSymbol = this.ctx.parameters()._closeSymbol.text;
    return openSymbol + text + closeSymbol;
  }
}
