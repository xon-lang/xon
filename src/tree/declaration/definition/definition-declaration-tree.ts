import { DefinitionDeclarationContext } from '~/grammar/xon-parser';
import { IssueLevel } from '~/issue/issue-level';
import { SourceSpan } from '~/source/source-span';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
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
  base: ExpressionTree | null = null;
  body: SourceTree | null;
  attributes: DeclarationStatementTree[];

  constructor(ctx: DefinitionDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    const [modifier, name] = ctx.ID();
    this.modifier = Token.from(modifier);
    this.name = Token.from(name);
    this.generics = (ctx.declarations()?.declaration().map(getDeclarationTree) as ParameterDeclarationTree[]) ?? [];
    const base = ctx.type()?.expression() ?? null;
    this.base = base && getExpressionTree(base);

    const body = ctx.body()?.source() ?? null;
    this.body = body && getSourceTree(body);

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
