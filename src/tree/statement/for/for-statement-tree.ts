import { ForStatementContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';

export class ForStatementTree extends StatementTree {
  ctx: ForStatementContext;
  sourceSpan: SourceSpan;
  declaration: DeclarationTree | null = null;
  expression: ExpressionTree;
  body: SourceTree | null = null;

  constructor(ctx: ForStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const declaration = ctx.declaration();
    if (declaration) {
      this.declaration = getDeclarationTree(declaration) as DeclarationTree;
    }

    this.expression = getExpressionTree(ctx.expression());
    this.body = getSourceTree(ctx.body().source());
    this.addChildren(this.declaration, this.expression, this.body);
  }
}
