import { MethodExpressionContext } from '~/grammar/xon-parser';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTrees } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceSpan } from '~/util/source/source-span';

export class MethodExpressionTree extends ExpressionTree {
  ctx: MethodExpressionContext;
  sourceSpan: SourceSpan;
  generics: DeclarationTree[] = [];
  parameters: DeclarationTree[] = [];
  value: ExpressionTree;

  constructor(ctx: MethodExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    const paramsGroup = ctx.declarations();
    this.generics = getDeclarationTrees(paramsGroup.filter((x) => x.open().OPEN_BRACE())[0]?.declaration() ?? []);
    this.parameters = getDeclarationTrees(paramsGroup.filter((x) => !x.open().OPEN_BRACE())[0]?.declaration());

    this.value = getExpressionTree(ctx.expression());
    this.addChildren(...this.parameters, this.value);
  }
}
