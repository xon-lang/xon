import { BodyContext, StatementContext } from '../../grammar/xon-parser';
import { String } from '../../lib/core';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';
import { getStatementFormatter } from '../statement/statement-formatter-helper';

export class BodyFormatter extends Formatter {
  constructor(public ctx: BodyContext, public config: FormatterConfig) {
    super();
  }

  toString(): String {
    if (this.ctx.source().statement()) {
      let statements = this.ctx
        .source()
        .sourceItem()
        .map((x) => {
          const nlCount = Math.min(2, x.NL().text.match(/\n/g)?.length || 0);
          const statement = this.indentStatement(x.statement());
          return statement + this.config.nl.repeat(nlCount);
        })
        .join('');

      const lastStatement = this.indentStatement(this.ctx.source().statement());
      return this.config.nl + statements + lastStatement;
    }
    return ``;
  }

  private indentStatement(ctx: StatementContext): String {
    const indent = this.config.indent(this.indentCount + 1);
    const statementFormatter = getStatementFormatter(ctx, this.config).indent(this.indentCount + 1);

    return indent + statementFormatter.toString();
  }
}
