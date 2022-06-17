import { CommentStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

export class CommentStatementFormatter extends StatementFormatter {
  constructor(public ctx: CommentStatementContext, public config: FormatterConfig) {
    super();
  }

  toString(): String {
    return this.ctx.text;
  }
}
