import { MethodExpressionContext } from '~/grammar/xon-parser';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTrees } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceRange } from '~/util/source-range';

export class MethodExpressionTree extends ExpressionTree {
  ctx: MethodExpressionContext;
  sourceRange: SourceRange;
  generics: DeclarationTree[] = [];
  parameters: DeclarationTree[] = [];
  type: ExpressionTree | null = null;
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

    const valueTypeCtx = ctx.valueType()?.expression();
    if (valueTypeCtx) {
      this.type = getExpressionTree(valueTypeCtx);
    }
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(...this.parameters, this.value);
  }
}
