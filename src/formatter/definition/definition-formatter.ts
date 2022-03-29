import { DefinitionContext } from '../../grammar/xon-parser';
import { getAttributeFormatter } from '../attribute/attribute-formatter-helper';
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
    const attributeIndent = this.config.indent(this.indentCount + 1);
    const attributes = this.ctx
      .attribute()
      .map(
        (x) => attributeIndent + getAttributeFormatter(x, this.config).indent(this.indentCount + 1),
      );
    const attributesString =
      (attributes.length && this.config.nl + attributes.join(this.config.nl)) || '';
    if (type) {
      return `${modifier} ${name}${parameters} ${type}${attributesString}`;
    }
    return `${modifier} ${name}${parameters}${attributesString}`;
  }
}
