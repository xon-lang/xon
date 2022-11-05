import { CommentStatementContext } from '@/grammar/xon-parser';
import { String2 } from '@/lib/core';
import { IdTree } from '@/tree/id/id-tree';
import { getIdTree } from '@/tree/id/id-tree-helper';
import { StatementTree } from '@/tree/statement/statement-tree';
import { SourceRange } from '@/util/source-range';

export class CommentStatementTree extends StatementTree {
  sourceRange: SourceRange;
  value: IdTree;

  constructor(ctx: CommentStatementContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = getIdTree(ctx._value);
    this.addChildren(this.value);
  }

  toString(): String2 {
    return this.value.toString();
  }
}
