import { DestructureDeclarationContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { getBodyTree } from '~/tree/body/body-tree-helper';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';

export class MultipleDeclarationTree extends DeclarationTree {
  ctx: DestructureDeclarationContext;
  parameters: DeclarationTree[];

  constructor(ctx: DestructureDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.parameters = ctx.declarations().declaration().map(getDeclarationTree);

    const type = ctx.type()?.expression() ?? null;
    this.type = type && getExpressionTree(type);

    const expression = ctx.value()?.expression() ?? null;
    const body = ctx.value()?.body() ?? null;
    this.value = (expression && getExpressionTree(expression)) || (body && getBodyTree(body));

    this.addChildren(...this.parameters, this.type, this.value);
  }
}
