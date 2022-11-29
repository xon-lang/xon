import { CommentStatementContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { StatementTree } from '~/tree/statement/statement-tree';
import { TokenTree } from '~/tree/token/token-tree';
import { getTokenTree } from '~/tree/token/token-tree-helper';

export class CommentStatementTree extends StatementTree {
  sourceSpan: SourceSpan;
  value: TokenTree;

  constructor(ctx: CommentStatementContext) {
    super();
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.value = getTokenTree(ctx._value);
    this.addChildren(this.value);
  }

  toString(): String2 {
    return this.value.toString();
  }
}
