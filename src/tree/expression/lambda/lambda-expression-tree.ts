import { LambdaExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { StatementTree } from '~/tree/statement/statement-tree';
import { getStatementTree } from '~/tree/statement/statement-tree-helper';

export class LambdaExpressionTree extends ExpressionTree {
  ctx: LambdaExpressionContext;
  sourceSpan: SourceSpan;
  generics: DeclarationTree[] = [];
  parameters: DeclarationTree[] = [];
  statement: StatementTree;

  constructor(ctx: LambdaExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const paramsGroup = ctx.declarations();
    const generics = paramsGroup.filter((x) => x.OPEN().text === '{')[0]?.declaration() ?? [];
    this.generics = generics.map(getDeclarationTree);
    const parameters =
      paramsGroup.filter((x) => x.OPEN().text === '(' || x.OPEN().text === '[')[0]?.declaration() ?? [];
    this.parameters = parameters.map(getDeclarationTree);

    this.statement = getStatementTree(ctx.statement());
    this.addChildren(...this.parameters, this.statement);
  }
}
