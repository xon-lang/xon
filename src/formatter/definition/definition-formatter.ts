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
    // const attributes = this.ctx
    //   .attribute()
    //   .map(
    //     (x) => attributeIndent + getAttributeFormatter(x, this.config).indent(this.indentCount + 1),
    //   );
    const properties = this.ctx
      .attribute()
      .filter((x) => !x.parameters())
      .map(
        (x) => attributeIndent + getAttributeFormatter(x, this.config).indent(this.indentCount + 1),
      )
      .join(this.config.nl);

    const methodsWithBody = this.ctx
      .attribute()
      .filter((x) => x.parameters() && x.body())
      .map(
        (x) => attributeIndent + getAttributeFormatter(x, this.config).indent(this.indentCount + 1),
      )
      .join(this.config.nl2);

    const methodsWithNoBody = this.ctx
      .attribute()
      .filter((x) => x.parameters() && !x.body())
      .map(
        (x) => attributeIndent + getAttributeFormatter(x, this.config).indent(this.indentCount + 1),
      )
      .join(this.config.nl);

    let attributesString = [properties, methodsWithBody, methodsWithNoBody]
      .filter((x) => x)
      .join(this.config.nl2);
    attributesString = (attributesString && this.config.nl + attributesString) || '';

    if (type) {
      return `${modifier} ${name}${parameters} ${type}${attributesString}`;
    }
    return `${modifier} ${name}${parameters}${attributesString}`;
  }
}
