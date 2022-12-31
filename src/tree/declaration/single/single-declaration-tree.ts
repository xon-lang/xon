import {
  DefinitionDeclarationContext,
  OperatorDeclarationContext,
  ParameterDeclarationContext,
} from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { getBodyTree } from '~/tree/body/body-tree-helper';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree, isSingleDeclaration } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { Token } from '~/tree/token';

export class SingleDeclarationTree extends DeclarationTree {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  ctx: DefinitionDeclarationContext | ParameterDeclarationContext | OperatorDeclarationContext;
  sourceSpan: SourceSpan;
  modifier: Token | null = null;
  name: Token;
  generics: DeclarationTree[] | null = null;

  get base(): ExpressionTree | null {
    return this.type;
  }

  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  constructor(ctx: DefinitionDeclarationContext | ParameterDeclarationContext | OperatorDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    if (ctx instanceof DefinitionDeclarationContext || ctx instanceof ParameterDeclarationContext) {
      const [id1, id2] = ctx.ID();
      this.modifier = (id2 && Token.from(id1)) ?? null;
      this.name = Token.from(id2 ?? id1);
    } else {
      const modifier = ctx.ID();
      this.modifier = (modifier && Token.from(modifier)) ?? null;
      this.name = Token.from(ctx.OP());
    }
    if (ctx instanceof DefinitionDeclarationContext) {
      const generics =
        ctx
          .declarations()
          .find((x) => x.OPEN().text === '{')
          ?.declaration() ?? [];
      this.generics = generics.map(getDeclarationTree).filter(isSingleDeclaration);
    }

    const type = ctx.type()?.expression() ?? null;
    this.type = type && getExpressionTree(type);

    const expression = ctx.value()?.expression() ?? null;
    const body = ctx.value()?.body() ?? null;
    this.value = (expression && getExpressionTree(expression)) || (body && getBodyTree(body));

    this.addChildren(this.modifier, this.name, ...(this.generics ?? []), this.type, this.value);
  }
}
