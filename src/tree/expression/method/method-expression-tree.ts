import { MethodExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { getDeclarationTree, isSingleDeclaration } from '~/tree/declaration/declaration-tree-helper';
import { SingleDeclarationTree } from '~/tree/declaration/single/single-declaration-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';

export class MethodExpressionTree extends ExpressionTree {
  ctx: MethodExpressionContext;
  sourceSpan: SourceSpan;
  generics: SingleDeclarationTree[] = [];
  parameters: SingleDeclarationTree[] = [];
  value: ExpressionTree;

  constructor(ctx: MethodExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const paramsGroup = ctx.declarations();
    const generics = paramsGroup.filter((x) => x.OPEN().text === '{')[0]?.declaration() ?? [];
    this.generics = generics.map(getDeclarationTree).filter(isSingleDeclaration);
    const parameters =
      paramsGroup.filter((x) => x.OPEN().text === '(' || x.OPEN().text === '[')[0]?.declaration() ?? [];
    this.parameters = parameters.map(getDeclarationTree).filter(isSingleDeclaration);

    this.value = getExpressionTree(ctx.expression());
    this.addChildren(...this.parameters, this.value);
  }
}
