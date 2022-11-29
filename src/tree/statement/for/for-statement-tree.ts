import { ForStatementContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';

export class ForStatementTree extends StatementTree {
  ctx: ForStatementContext;
  sourceSpan: SourceSpan;
  parameter: ParameterDeclarationTree | null = null;
  expression: ExpressionTree;
  body: SourceTree | null = null;

  constructor(ctx: ForStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const declaration = ctx.declaration();
    if (declaration) {
      this.parameter = getDeclarationTree(declaration) as ParameterDeclarationTree;
    }

    this.expression = getExpressionTree(ctx.expression());
    this.body = getSourceTree(ctx.body().source());
    this.addChildren(this.parameter, this.expression, this.body);
  }
}
