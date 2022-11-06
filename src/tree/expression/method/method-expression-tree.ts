import { MethodExpressionContext } from '~/grammar';
import { DeclarationTree, ExpressionTree, getDeclarationTrees, getExpressionTree } from '~/tree';
import { SourceRange } from '~/util';

export class MethodExpressionTree extends ExpressionTree {
  ctx: MethodExpressionContext;
  sourceRange: SourceRange;
  generics: DeclarationTree[] = [];
  parameters: DeclarationTree[] = [];
  type: ExpressionTree;
  value: ExpressionTree;

  constructor(ctx: MethodExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);

    const paramsGroup = ctx.declarations();
    this.generics = getDeclarationTrees(
      paramsGroup.filter((x) => x.open().LESS())[0]?.declaration(),
    );
    this.parameters = getDeclarationTrees(
      paramsGroup.filter((x) => !x.open().LESS())[0]?.declaration(),
    );
    this.type = getExpressionTree(ctx.valueType()?.expression());
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(...this.parameters, this.value);
  }
}
