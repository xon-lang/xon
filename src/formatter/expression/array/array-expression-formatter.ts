import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { FormatterConfig } from '../../formatter-config';
import { getParameterFormatter } from '../../parameter/parameter-formatter-helper';
import { ExpressionFormatter } from '../expression-formatter';

export class ArrayExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: ArrayExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const parameters = this.ctx
      .parameters()
      .parameter()
      .map((x) => getParameterFormatter(x, this.config));

    let joinedParameters = parameters.join(', ');
    let result = `${this.indentString}[${joinedParameters}]`;

    if (
      this.broken ||
      result.length > this.config.printWidth ||
      joinedParameters.includes(this.config.nl)
    ) {
      joinedParameters =
        parameters.map((x) => x.indent(this.indentCount + 1)).join(',' + this.config.nl) + ',';
      result = `${this.indentString}[\n${joinedParameters}\n${this.indentString}]`;
    }
    return result;
  }
}
