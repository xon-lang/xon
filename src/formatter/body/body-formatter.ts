import { Formatter } from '~/formatter/formatter';
import { FormatterConfig } from '~/formatter/formatter-config';
import { getStatementFormatter } from '~/formatter/statement/statement-formatter-helper';
import { BodyContext, StatementContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';

export class BodyFormatter extends Formatter {
  constructor(public ctx: BodyContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    if (this.ctx.source().statement()) {
      const statements = this.ctx
        .source()
        .statement()
        .slice(0, -1)
        .map((x, i) => {
          const nlCount = Math.min(2, this.ctx.source()._nl[i].text?.match(/\n/ug)?.length ?? 0);
          const statement = this.indentStatement(x);

          return statement + this.config.nl.repeat(nlCount);
        })
        .join('');

      const lastStatement = this.indentStatement(this.ctx.source().statement()
        .slice(-1)[0]);

      return this.config.nl + statements + lastStatement;
    }

    return '';
  }

  private indentStatement(ctx: StatementContext): String2 {
    const indent = this.config.indent(this.indentCount + 1);
    const statementFormatter = getStatementFormatter(ctx, this.config)?.indent(
      this.indentCount + 1,
    );

    return indent + (statementFormatter?.toString() ?? '');
  }
}
