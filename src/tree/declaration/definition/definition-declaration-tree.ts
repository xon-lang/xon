import { DefinitionDeclarationContext } from '~/grammar/xon-parser';
import { IssueLevel } from '~/issue/issue-level';
import { SourceSpan } from '~/source/source-span';
import { BodyTree } from '~/tree/body/body-tree';
import { getBodyTree } from '~/tree/body/body-tree-helper';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { CommentStatementTree } from '~/tree/statement/comment/comment-statement-tree';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { StatementTree } from '~/tree/statement/statement-tree';
import { Token } from '~/tree/token';

export class DefinitionDeclarationTree extends DeclarationTree {
  ctx: DefinitionDeclarationContext;
  sourceSpan: SourceSpan;
  modifier: Token;
  name: Token;
  generics: ParameterDeclarationTree[] = [];
  parameters: ParameterDeclarationTree[] = [];
  body: BodyTree | null = null;
  attributes: DeclarationStatementTree[];

  get base(): ExpressionTree | null {
    return this.type;
  }

  constructor(ctx: DefinitionDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const [modifier, name] = ctx.ID();
    this.modifier = Token.from(modifier);
    this.name = Token.from(name);

    const generics =
      ctx
        .declarations()
        .find((x) => x.OPEN().text === '{')
        ?.declaration() ?? [];
    this.generics = generics.map(getDeclarationTree).filter(isParameterDeclaration);

    const parameters =
      ctx
        .declarations()
        .find((x) => x.OPEN().text === '{')
        ?.declaration() ?? [];
    this.parameters = parameters.map(getDeclarationTree).filter(isParameterDeclaration);

    const type = ctx.type()?.expression() ?? null;
    this.type = type && getExpressionTree(type);

    const expression = ctx.value()?.expression() ?? null;
    const body = ctx.value()?.body() ?? null;
    this.value = (expression && getExpressionTree(expression)) || (body && getBodyTree(body));

    if (this.value instanceof ExpressionTree) {
      this.value.addError('Definition cannot have expression instead of body');
    }

    const statements = this.body?.statements ?? [];
    statements
      .filter((x) => !(x instanceof DeclarationStatementTree || x instanceof CommentStatementTree))
      .forEach((x) => x.addIssue(IssueLevel.error, 'Definition body should contain only parameters'));

    this.attributes = statements.filter(isDeclarationStatement);

    this.addChildren(this.modifier, this.name, ...this.generics, this.base, this.body);
  }
}

const isDeclarationStatement = (statement: StatementTree): statement is DeclarationStatementTree =>
  statement instanceof DeclarationStatementTree;

const isParameterDeclaration = (declaration: DeclarationTree): declaration is ParameterDeclarationTree =>
  declaration instanceof ParameterDeclarationTree;
