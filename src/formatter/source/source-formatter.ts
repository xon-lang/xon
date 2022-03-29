import { ImportStatementContext, SourceContext } from '../../grammar/xon-parser';
import { String } from '../../lib/core';
import { getAttributeFormatter } from '../attribute/attribute-formatter-helper';
import { getDefinitionFormatter } from '../definition/definition-formatter-helper';
import { getExpressionFormatter } from '../expression/expression-formatter-helper';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';
import { getStatementFormatter } from '../statement/statement-formatter-helper';

export class SourceFormatter extends Formatter {
  constructor(public ctx: SourceContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const importStatements = this.ctx
      .statement()
      .filter((x) => x instanceof ImportStatementContext)
      .map((x) => x as ImportStatementContext);

    const importStatementsMap: { [key: String]: String[] } = {};
    for (let importStatement of importStatements) {
      const path = getExpressionFormatter(importStatement._path, this.config).toString();
      importStatementsMap[path] = importStatementsMap[path] || [];
      const members = importStatement._members.map((x) =>
        getExpressionFormatter(x, this.config).toString(),
      );
      importStatementsMap[path].push(...members);
    }
    const uniqueImportStatements = Object.keys(importStatementsMap)
      .sort((a, b) => a.localeCompare(b))
      .map(
        (x) =>
          `import ${x}: ${[
            ...new Set(importStatementsMap[x].sort((a, b) => a.localeCompare(b))),
          ].join(', ')}`,
      )
      .join(this.config.nl);

    const otherStatements = this.ctx
      .statement()
      .filter((x) => !(x instanceof ImportStatementContext))
      .map((x) => getStatementFormatter(x, this.config))
      .join(this.config.nl);
    const attributes = this.ctx
      .attribute()
      .map((x) => getAttributeFormatter(x, this.config))
      .join(this.config.nl2);
    const definitions = this.ctx
      .definition()
      .map((x) => getDefinitionFormatter(x, this.config))
      .join(this.config.nl2);
    const result = [uniqueImportStatements, otherStatements, attributes, definitions]
      .filter(x=>x)
      .join(this.config.nl2);
    return (result && result + this.config.nl) || '';
  }
}
