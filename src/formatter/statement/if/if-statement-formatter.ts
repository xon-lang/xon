import {
  IfStatementContext,
  MultipleBodyContext,
  SingleBodyContext,
} from '../../../grammar/xon-parser';
import { getExpressionFormatter } from '../../expression/expression-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';
import { getStatementFormatter } from '../statement-formatter-helper';

export class IfStatementFormatter extends StatementFormatter {
  constructor(public ctx: IfStatementContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const condition = getExpressionFormatter(this.ctx.expression(), this.config);
    let result = `${this.indentString}if ${condition}`;
    if (this.ctx._thenBody instanceof SingleBodyContext) {
      const statement = getStatementFormatter(this.ctx._thenBody.statement(), this.config);
      result += ': ' + statement;
    } else if (this.ctx._thenBody instanceof MultipleBodyContext) {
      const statements = this.ctx._thenBody
        .statement()
        .map((x) => getStatementFormatter(x, this.config).indent(this.indentCount + 1))
        .join(this.config.nl);
      result += '\n' + statements;
    }

    if (this.ctx._elseBody instanceof SingleBodyContext) {
      const statement = getStatementFormatter(this.ctx._elseBody.statement(), this.config);
      if (this.ctx._thenBody instanceof MultipleBodyContext) {
        result += `\n${this.indentString}else: ${statement}`;
      } else {
        result += ' else: ' + statement;
      }
    } else if (this.ctx._elseBody instanceof MultipleBodyContext) {
      const statements = this.ctx._elseBody
        .statement()
        .map((x) => getStatementFormatter(x, this.config).indent(this.indentCount + 1))
        .join(this.config.nl);
      result += `\n${this.indentString}else\n${statements}`;
    }

    return result;
  }
}
