import { CommentStatementContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { StatementTree } from '~/tree/statement/statement-tree';
import { Token } from '~/tree/token';

export class CommentStatementTree extends StatementTree {
  sourceSpan: SourceSpan;
  value: Token;

  constructor(ctx: CommentStatementContext) {
    super();
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.value = Token.from(ctx._value);
    this.addChildren(this.value);
  }

  toString(): String2 {
    return this.value.toString();
  }
}
