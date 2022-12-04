import { ParameterDeclarationContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { getBodyTree } from '~/tree/body/body-tree-helper';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class ParameterDeclarationTree extends DeclarationTree {
  ctx: ParameterDeclarationContext;
  name: Token;

  constructor(ctx: ParameterDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = Token.from(ctx.ID());

    const type = ctx.type()?.expression() ?? null;
    this.type = type && getExpressionTree(type);

    const expression = ctx.value()?.expression() ?? null;
    const body = ctx.value()?.body() ?? null;
    this.value = expression && getExpressionTree(expression) || body && getBodyTree(body);

    this.addChildren(this.name, this.type, this.value);
  }
}
