import { ParameterContext } from '../../grammar/xon-parser';
import { getExpressionFormatter } from '../expression/expression-formatter-helper';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';

export class ParameterFormatter extends Formatter {
  constructor(public ctx: ParameterContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const variable = getExpressionFormatter(this.ctx._variable, this.config).indent(
      this.indentCount,
    );
    const type =
      (this.ctx._type && ' ' + getExpressionFormatter(this.ctx._type, this.config).toString()) ||
      '';
    // const body = getExpressionFormatter(this.ctx.body())
    return `${variable}${type}`;
  }
}
