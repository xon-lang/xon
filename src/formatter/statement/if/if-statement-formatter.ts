import { IfStatementContext } from '../../../grammar/xon-parser';
import { getBodyFormatter } from '../../body/body-formatter-helper';
import { getExpressionFormatter } from '../../expression/expression-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

export class IfStatementFormatter extends StatementFormatter {
  constructor(public ctx: IfStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const condition = getExpressionFormatter(this.ctx.expression(), this.config).indent(
      this.indentCount,
    );
    const thenBody = getBodyFormatter(this.ctx._thenBody, this.config).indent(this.indentCount);
    let result = `if ${condition}${thenBody}`;
    if (this.ctx._elseBody) {
      const elseBody = getBodyFormatter(this.ctx._elseBody, this.config).indent(this.indentCount);
      result += this.config.nl + this.config.indent(this.indentCount) + `else${elseBody}`;
    }

    return result;
  }
}
