import { DeclarationStatementContext } from '../../../grammar/xon-parser';
import { getDefinitionFormatter } from '../../definition/definition-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { getParameterFormatter } from '../../parameter/parameter-formatter-helper';
import { StatementFormatter } from '../Statement-formatter';

export class DeclarationStatementFormatter extends StatementFormatter {
  constructor(public ctx: DeclarationStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    if (this.ctx.definition()) {
      return getDefinitionFormatter(this.ctx.definition(), this.config)
        .indent(this.indentCount)
        .toString();
    }
    if (this.ctx.parameter()) {
      return getParameterFormatter(this.ctx.parameter(), this.config)
        .indent(this.indentCount)
        .toString();
    }
  }
}
