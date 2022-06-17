import { DefinitionContext } from '../../grammar/xon-parser';
import { getBodyFormatter } from '../body/body-formatter-helper';
import { getExpressionFormatter } from '../expression/expression-formatter-helper';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';
import { getParametersFormatter } from '../parameters/parameters-formatter-helper';

export class DefinitionFormatter extends Formatter {
  constructor(public ctx: DefinitionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const modifier = this.ctx._modifier.text;
    const name = this.ctx._name.text;
    const parameters =
      getParametersFormatter(this.ctx.parameters(), this.config)?.indent(this.indentCount) || '';
    const type = getExpressionFormatter(this.ctx.expression(), this.config)?.indent(
      this.indentCount,
    );

    const body = getBodyFormatter(this.ctx.body(), this.config)?.indent(this.indentCount) || '';
    let result = '';
    if (type) {
      result = `${modifier} ${name}${parameters} is ${type}${body}`;
    } else {
      result = `${modifier} ${name}${parameters}${body}`;
    }
    return result;
  }
}
