import { LambdaExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { getDeclarationTree, isSingleDeclaration } from '~/tree/declaration/declaration-tree-helper';
import { SingleDeclarationTree } from '~/tree/declaration/single/single-declaration-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { StatementTree } from '~/tree/statement/statement-tree';
import { getStatementTree } from '~/tree/statement/statement-tree-helper';

export class LambdaExpressionTree extends ExpressionTree {
  ctx: LambdaExpressionContext;
  sourceSpan: SourceSpan;
  generics: SingleDeclarationTree[] = [];
  parameters: SingleDeclarationTree[] = [];
  statement: StatementTree;

  constructor(ctx: LambdaExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const paramsGroup = ctx.declarations();
    const generics = paramsGroup.filter((x) => x.OPEN().text === '{')[0]?.declaration() ?? [];
    this.generics = generics.map(getDeclarationTree).filter(isSingleDeclaration);
    const parameters =
      paramsGroup.filter((x) => x.OPEN().text === '(' || x.OPEN().text === '[')[0]?.declaration() ?? [];
    this.parameters = parameters.map(getDeclarationTree).filter(isSingleDeclaration);

    this.statement = getStatementTree(ctx.statement());
    this.addChildren(...this.parameters, this.statement);
  }
}
