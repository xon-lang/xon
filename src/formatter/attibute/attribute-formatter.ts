import { AttributeContext } from '../../grammar/xon-parser';
import { getExpressionFormatter } from '../expression/expression-formatter-helper';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';

export class AttributeFormatter extends Formatter {
  constructor(public ctx: AttributeContext, public config: FormatterConfig) {
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
