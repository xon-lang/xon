import {
  DeclarationContext,
  DefinitionDeclarationContext,
  OperatorDeclarationContext,
  ParameterDeclarationContext,
} from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { BodyTree } from '~/tree/body/body-tree';
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
  modifier: Token | null;
  name: Token;
  generics: DeclarationTree[] = [];
  parameters: DeclarationTree[] = [];
  body: BodyTree | null = null;

  get base(): ExpressionTree | null {
    return this.type;
  }

  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  constructor(ctx: DefinitionDeclarationContext | ParameterDeclarationContext | OperatorDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    if(ctx instanceof DefinitionDeclarationContext){
      this.modifier = (Token.from(id2)) ?? null;
      this.name = Token.from(id2 ?? id1);
    }

    const generics =
      ctx
        .declarations()
        .find((x) => x.OPEN().text === '{')
        ?.declaration() ?? [];
    this.generics = generics.map(getDeclarationTree).filter(isSingleDeclaration);

    const parameters =
      ctx
        .declarations()
        .find((x) => x.OPEN().text === '(')
        ?.declaration() ?? [];
    this.parameters = parameters.map(getDeclarationTree).filter(isSingleDeclaration);

    const type = ctx.type()?.expression() ?? null;
    this.type = type && getExpressionTree(type);

    const expression = ctx.value()?.expression() ?? null;
    const body = ctx.value()?.body() ?? null;
    this.value = (expression && getExpressionTree(expression)) || (body && getBodyTree(body));

    this.addChildren(this.modifier, this.name, ...this.generics, this.base, this.body);
  }
}
