import { ParameterContext } from '../../grammar/xon-parser';
import { getBodyFormatter } from '../body/body-formatter-helper';
import { getExpressionFormatter } from '../expression/expression-formatter-helper';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';

export class ParameterFormatter extends Formatter {
  constructor(public ctx: ParameterContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const typeSign = (this.ctx.COLON() && ':') || '';
    const type =
      (this.ctx._type &&
        ' ' +
          getExpressionFormatter(this.ctx._type, this.config)
            .indent(this.indentCount)
            .toString()
            .trim()) ||
      '';
    let body =
      (this.ctx.body() &&
        ((type && ' ') || '') +
          getBodyFormatter(this.ctx.body(), this.config).indent(this.indentCount)) ||
      '';
    return `${this.ctx._name.text}${typeSign}${type}${body}`;
  }
}
