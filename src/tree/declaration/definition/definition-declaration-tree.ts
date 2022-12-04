import { DefinitionDeclarationContext } from '~/grammar/xon-parser';
import { IssueLevel } from '~/issue/issue-level';
import { SourceSpan } from '~/source/source-span';
import { BodyTree } from '~/tree/body/body-tree';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { CommentStatementTree } from '~/tree/statement/comment/comment-statement-tree';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { StatementTree } from '~/tree/statement/statement-tree';
import { Token } from '~/tree/token';
import { BodyValueTree } from '~/tree/value/body/body-value-tree';
import { ExpressionValueTree } from '~/tree/value/expression/expression-value-tree';
import { getValueTree } from '~/tree/value/value-tree-helper';

export class DefinitionDeclarationTree extends DeclarationTree {
  ctx: DefinitionDeclarationContext;
  sourceSpan: SourceSpan;
  modifier: Token;
  name: Token;
  generics: ParameterDeclarationTree[] = [];
  parameters: ParameterDeclarationTree[] = [];
  base: ExpressionTree | null = null;
  body: BodyTree | null = null;
  attributes: DeclarationStatementTree[];

  constructor(ctx: DefinitionDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const [modifier, name] = ctx.ID();
    this.modifier = Token.from(modifier);
    this.name = Token.from(name);

    const generics
      = ctx
        .declarations()
        .find((x) => x.OPEN().text === '{')
        ?.declaration() ?? [];
    this.generics = generics.map(getDeclarationTree).filter(isParameterDeclaration);

    const parameters
      = ctx
        .declarations()
        .find((x) => x.OPEN().text === '{')
        ?.declaration() ?? [];
    this.parameters = parameters.map(getDeclarationTree).filter(isParameterDeclaration);

    const base = ctx.type()?.expression() ?? null;
    this.base = base && getExpressionTree(base);

    const value = ctx.value() ?? null;
    const valueTree = value && getValueTree(value);

    if (valueTree instanceof ExpressionValueTree) {
      valueTree.addError('Definition cannot have expression instead of body');
    } else if (valueTree instanceof BodyValueTree) {
      this.body = valueTree.body;
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
