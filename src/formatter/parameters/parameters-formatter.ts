import { ParametersContext } from '../../grammar/xon-parser';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';
import { getParameterFormatter } from '../parameter/parameter-formatter-helper';

export class ParametersFormatter extends Formatter {
  constructor(public ctx: ParametersContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const openSymbol = (this.ctx.OPEN_PAREN() || this.ctx.OPEN_BRACKET() || this.ctx.OPEN_BRACE())
      .text;
    const closeSymbol = (
      this.ctx.CLOSE_PAREN() ||
      this.ctx.CLOSE_BRACKET() ||
      this.ctx.CLOSE_BRACE()
    ).text;

    if (this.ctx.parameter().length === 0) {
      return openSymbol + closeSymbol;
    }

    let sortedParameters = [];
    if (this.ctx.CLOSE_BRACE()) {
      sortedParameters = this.ctx
        .parameter()
        .sort((a, b) => a._name.text.localeCompare(b._name.text));
    } else {
      sortedParameters = this.ctx.parameter();
    }
    const parameters = sortedParameters.map((x) =>
      getParameterFormatter(x, this.config).indent(this.indentCount),
    );

    let result = openSymbol + parameters.join(', ') + closeSymbol;

    if (this.broken || result.length > this.config.printWidth || result.includes(this.config.nl)) {
      const parameterIndent = this.config.indent(this.indentCount + 1);
      const joinedParameters =
        parameters
          .map((x) => parameterIndent + x.indent(this.indentCount + 1))
          .join(',' + this.config.nl) + ((parameters.length > 1 && ',') || '');
      result =
        openSymbol +
        this.config.nl +
        joinedParameters +
        this.config.nl +
        this.config.indent(this.indentCount) +
        closeSymbol;
    }

    return result;
  }
}
