// this code was generated

import { CommentStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { IdTree } from '../../id/id-tree';
import { getIdTree } from '../../id/id-tree-helper';
import { StatementTree } from '../statement-tree';

export class CommentStatementTree extends StatementTree {
  sourceRange: SourceRange;
  value: IdTree;

  constructor(ctx: CommentStatementContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = getIdTree(ctx._value);
    this.addChildren(this.value);
  }

  toString(): String {
    return this.value.toString();
  }
}

// this code was generated
