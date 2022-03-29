import { AttributeContext } from '../../grammar/xon-parser';
import { getBodyFormatter } from '../body/body-formatter-helper';
import { SingleBodyFormatter } from '../body/single/single-body-formatter';
import { getExpressionFormatter } from '../expression/expression-formatter-helper';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';
import { getParametersFormatter } from '../parameters/parameters-formatter-helper';

export class AttributeFormatter extends Formatter {
  constructor(public ctx: AttributeContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const name = this.ctx._name.text;
    const parameters = getParametersFormatter(this.ctx.parameters(), this.config)?.indent(
      this.indentCount,
    );
    const type = getExpressionFormatter(this.ctx.expression(), this.config)?.indent(
      this.indentCount,
    );
    const body = getBodyFormatter(this.ctx.body(), this.config)?.indent(this.indentCount);

    const isLargeLength = () =>
      this.config.endLineCharPosition(
        name + (parameters || '') + ((type && ' ' + type) || '') + (body || ''),
      ) > this.config.printWidth;

    if (isLargeLength() && body instanceof SingleBodyFormatter) {
      body?.break(true);
    }

    if (isLargeLength()) {
      parameters?.break(true);
    }

    // if (isLargeLength()) {
    //   type?.break(true);
    // }

    return name + (parameters || '') + ((type && ' ' + type) || '') + (body || '');
  }
}
