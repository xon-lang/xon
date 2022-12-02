import { MethodExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { getDeclarationTrees } from '~/tree/declaration/declaration-tree-helper';
import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';

export class MethodExpressionTree extends ExpressionTree {
  ctx: MethodExpressionContext;
  sourceSpan: SourceSpan;
  generics: ParameterDeclarationTree[] = [];
  parameters: ParameterDeclarationTree[] = [];
  value: ExpressionTree;

  constructor(ctx: MethodExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const paramsGroup = ctx.declarations();
    this.generics = getDeclarationTrees(
      paramsGroup.filter((x) => x.OPEN().text === '{')[0]?.declaration() ?? [],
    ) as ParameterDeclarationTree[];
    this.parameters = getDeclarationTrees(
      paramsGroup.filter((x) => x.OPEN().text !== '{')[0]?.declaration(),
    ) as ParameterDeclarationTree[];

    this.value = getExpressionTree(ctx.expression());
    this.addChildren(...this.parameters, this.value);
  }
}
