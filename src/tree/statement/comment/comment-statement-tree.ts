import { CommentStatementContext } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { SourceSpan } from '~/source/source-span';
import { IdTree } from '~/tree/id/id-tree';
import { getIdTree } from '~/tree/id/id-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';

export class CommentStatementTree extends StatementTree {
  sourceSpan: SourceSpan;
  value: IdTree;

  constructor(ctx: CommentStatementContext) {
    super();
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.value = getIdTree(ctx._value);
    this.addChildren(this.value);
  }

  toString(): String2 {
    return this.value.toString();
  }
}
