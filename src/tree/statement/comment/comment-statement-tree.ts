import { CommentStatementContext } from '~/grammar';
import { String2 } from '~/lib';
import { getIdTree, IdTree, StatementTree } from '~/tree';
import { SourceRange } from '~/util';

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
