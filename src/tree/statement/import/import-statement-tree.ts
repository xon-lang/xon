import { ImportStatementContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { StatementTree } from '~/tree/statement/statement-tree';

export class ImportStatementTree extends StatementTree {
  ctx: ImportStatementContext;
  sourceSpan: SourceSpan;
  path: ExpressionTree | null;
  declarations: DeclarationTree[] | null;

  constructor(ctx: ImportStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const expression = ctx.expression() ?? null;
    this.path = expression && getExpressionTree(expression);
    this.declarations = ctx.declarations()?.declaration().map(getDeclarationTree) ?? null;
    this.addChildren(this.path);
  }
}
