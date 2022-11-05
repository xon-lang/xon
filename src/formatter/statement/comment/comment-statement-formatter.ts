import { FormatterConfig } from '@/formatter/formatter-config';
import { StatementFormatter } from '@/formatter/statement/Statement-formatter';
import { CommentStatementContext } from '@/grammar/xon-parser';
import { String2 } from '@/lib/core';

export class CommentStatementFormatter extends StatementFormatter {
  constructor(public ctx: CommentStatementContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return this.ctx.text;
  }
}
