import { SourceContext } from '../../grammar/xon-parser';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';
import { getStatementFormatter } from '../statement/statement-formatter-helper';

export class SourceFormatter extends Formatter {
  constructor(public ctx: SourceContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    if (this.ctx.statement()) {
      const statements = this.ctx
        .statement()
        .slice(0, -1)
        .map((x, i) => {
          const nlCount = Math.min(2, this.ctx._nl[i].text.match(/\n/g)?.length || 0);
          const statement = getStatementFormatter(x, this.config);
          return statement + this.config.nl.repeat(nlCount);
        })
        .join('');

      const lastStatement = getStatementFormatter(
        this.ctx.statement().slice(-1)[0],
        this.config,
      ).toString();
      return statements + lastStatement + this.config.nl;
    }
    return '';
  }
}
