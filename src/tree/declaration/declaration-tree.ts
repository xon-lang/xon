import { DeclarationContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { BodyTree } from '~/tree/body/body-tree';
import { getBodyTree } from '~/tree/body/body-tree-helper';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';
import { Tree } from '~/tree/tree';

export class DeclarationTree extends Tree {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  ctx: DeclarationContext;
  sourceSpan: SourceSpan;
  modifier: Token | null;
  name: Token;
  generics: DeclarationTree[] | null;
  parameters: DeclarationTree[] | null;
  indexers: DeclarationTree[] | null;
  type: ExpressionTree | null;
  value: ExpressionTree | BodyTree | null;

  constructor(ctx: DeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);

    this.modifier = (ctx._modifier && Token.from(ctx._modifier)) ?? null;
    this.name = Token.from(ctx._name);

    this.generics = this.declarationsBy('{');
    this.parameters = this.declarationsBy('(');
    this.indexers = this.declarationsBy('{');

    const type = ctx.type()?.expression() ?? null;
    this.type = type && getExpressionTree(type);

    const expression = ctx.value()?.expression() ?? null;
    const body = ctx.value()?.body() ?? null;
    this.value = (expression && getExpressionTree(expression)) || (body && getBodyTree(body));

    this.addChildren(this.modifier, this.name, ...(this.generics ?? []), this.type, this.value);
  }

  declarationsBy(open: '{' | '(' | '['): DeclarationTree[] | null {
    return (
      this.ctx
        .declarations()
        .find((x) => x.OPEN().text === open)
        ?.declaration()
        .map(getDeclarationTree) ?? null
    );
  }
}
