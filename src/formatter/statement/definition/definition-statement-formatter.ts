import { DefinitionStatementContext } from '../../../grammar/xon-parser';
import { getDefinitionFormatter } from '../../definition/definition-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

export class DefinitionStatementFormatter extends StatementFormatter {
  constructor(public ctx: DefinitionStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const definition = getDefinitionFormatter(this.ctx.definition(), this.config).indent(
      this.indentCount,
    );
    return definition.toString();
  }
}
