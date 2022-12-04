import { DestructureDeclarationContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';

export class DestructureDeclarationTree extends DeclarationTree {
  ctx: DestructureDeclarationContext;
  parameters: DeclarationTree[];
  type: ExpressionTree | null;
  value: ExpressionTree | null;

  constructor(ctx: DestructureDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.parameters = ctx.declarations().declaration().map(getDeclarationTree);
    const type = ctx.type()?.expression() ?? null;
    this.type = type && getExpressionTree(type);

    const value = ctx.expression() ?? null;
    this.value = value && getExpressionTree(value);

    this.addChildren(...this.parameters, this.type, this.value);
  }
}
