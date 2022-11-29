import { ParameterDeclarationContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { Token } from '~/tree/token';

export class ParameterDeclarationTree extends DeclarationTree {
  ctx: ParameterDeclarationContext;
  name: Token;
  type: ExpressionTree | null;
  value: ExpressionTree | null;
  body: SourceTree | null;

  constructor(ctx: ParameterDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = Token.from(ctx.ID());
    const type = ctx.type()?.expression() ?? null;
    this.type = type && getExpressionTree(type);

    const value = ctx.expression() ?? null;
    this.value = value && getExpressionTree(value);

    const body = ctx.body()?.source() ?? null;
    this.body = body && getSourceTree(body);

    this.addChildren(this.name, this.type, this.body);
  }
}
