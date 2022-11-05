import { DeclarationStatementContext } from '@/grammar/xon-parser';
import { String2 } from '@/lib/core';
import { DeclarationTree } from '@/tree/declaration/declaration-tree';
import { getDeclarationTree } from '@/tree/declaration/declaration-tree-helper';
import { StatementTree } from '@/tree/statement/statement-tree';
import { SourceRange } from '@/util/source-range';

export class DeclarationStatementTree extends StatementTree {
  ctx: DeclarationStatementContext;
  sourceRange: SourceRange;
  declaration: DeclarationTree;

  constructor(ctx: DeclarationStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.declaration = getDeclarationTree(ctx.declaration());
    this.addChildren(this.declaration);
  }

  toString(): String2 {
    return this.declaration.toString();
  }
}
