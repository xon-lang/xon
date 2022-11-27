import { ForStatementContext } from '~/grammar/xon-parser';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';
import { SourceSpan } from '~/util/source/source-span';

export class ForStatementTree extends StatementTree {
  ctx: ForStatementContext;
  sourceSpan: SourceSpan;
  parameter: DeclarationTree | null = null;
  expression: ExpressionTree;
  body: SourceTree | null = null;

  constructor(ctx: ForStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const declaration = ctx.declaration();
    if (declaration) {
      this.parameter = getDeclarationTree(declaration);
    }

    this.expression = getExpressionTree(ctx.expression());
    this.body = getSourceTree(ctx.body().source());
    this.addChildren(this.parameter, this.expression, this.body);
  }
}
