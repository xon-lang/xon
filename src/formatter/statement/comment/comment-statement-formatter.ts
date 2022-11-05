import { CommentStatementContext } from '../../../grammar/xon-parser';
import { String2 } from '../../../lib/core';
import { FormatterConfig } from '../../formatter-config';
import { StatementFormatter } from '../Statement-formatter';

export class CommentStatementFormatter extends StatementFormatter {
  constructor(public ctx: CommentStatementContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return this.ctx.text;
  }
}
