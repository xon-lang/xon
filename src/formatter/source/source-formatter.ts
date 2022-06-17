import { SourceContext } from '../../grammar/xon-parser';
import { Formatter } from '../formatter';
import { FormatterConfig } from '../formatter-config';
import { getStatementFormatter } from '../statement/statement-formatter-helper';

export class SourceFormatter extends Formatter {
  constructor(public ctx: SourceContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const statements = this.ctx
      .statement()
      .map((x) => getStatementFormatter(x, this.config))
      .join('');

    return (statements && statements.trim() + this.config.nl) || '';
  }
}
