import { CommentStatementContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { SourceSpan } from '~/util/source/source-span';

export class CommentStatementTree extends StatementTree {
  sourceRange: SourceSpan;
  value: IdTree;

  constructor(ctx: CommentStatementContext) {
    super();
    this.sourceRange = SourceSpan.fromContext(ctx);
    this.value = getIdTree(ctx._value);
    this.addChildren(this.value);
  }

  toString(): String2 {
    return this.value.toString();
  }
}
