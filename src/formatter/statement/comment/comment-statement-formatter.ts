import { FormatterConfig, StatementFormatter } from '~/formatter';
import { CommentStatementContext } from '~/grammar';
import { String2 } from '~/lib';

export class CommentStatementFormatter extends StatementFormatter {
  constructor(public ctx: CommentStatementContext, public config: FormatterConfig) {
    super();
  }

  toString(): String2 {
    return this.ctx.text;
  }
}
