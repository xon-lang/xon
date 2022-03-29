import { ImportStatementContext } from '../../../grammar/xon-parser';
import { getExpressionFormatter } from '../../expression/expression-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

export class ImportStatementFormatter extends StatementFormatter {
  constructor(public ctx: ImportStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const path = getExpressionFormatter(this.ctx._path, this.config).indent(this.indentCount);
    const members =
      (this.ctx._members.length &&
        ': ' +
          this.ctx._members
            .map((x) => getExpressionFormatter(x, this.config).indent(this.indentCount))
            .join(', ')) ||
      '';
    return `import ${path}${members}`;
  }
}
