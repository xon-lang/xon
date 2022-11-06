import { DeclarationStatementContext } from '~/grammar';
import { DeclarationTree, getDeclarationTree, StatementTree } from '~/tree';
import { SourceRange } from '~/util';

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
}
