import { NlStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

export class NlStatementFormatter extends StatementFormatter {
  constructor(public ctx: NlStatementContext, public config: FormatterConfig) {
    super();
  }

  toString(): String {
    const nlCount = Math.min(2, this.ctx.text.match(/\n/g)?.length || 0);
    return this.config.nl.repeat(nlCount);
  }
}
