import { DeclarationContext } from '~/grammar/xon-parser';
import { IssueLevel } from '~/issue/issue-level';
import { Boolean2 } from '~/lib/core';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { SourceSpan } from '~/source/source-span';
import { getDeclarationTrees } from '~/tree/declaration/declaration-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { SourceTree } from '~/tree/source/source-tree';
import { getSourceTree } from '~/tree/source/source-tree-helper';
import { CommentStatementTree } from '~/tree/statement/comment/comment-statement-tree';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { ExpressionStatementTree } from '~/tree/statement/expression/expression-statement-tree';
import { Token } from '~/tree/token';
import { Tree } from '~/tree/tree';

export class DeclarationTree extends Tree {
  ctx: DeclarationContext;
  metadata: DeclarationMetadata | null = null;
  sourceSpan: SourceSpan;
  modifier: Token | null;
  name: Token | null;
  destructure: DeclarationTree[];
  hasParameters: Boolean2;
  generics: DeclarationTree[];
  parameters: DeclarationTree[];
  type: ExpressionTree | null;
  value: ExpressionTree | null;
  body: SourceTree | null;
  attributes: (DeclarationStatementTree | ExpressionStatementTree)[];

  constructor(ctx: DeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.modifier = ctx._modifier && Token.from(ctx._modifier);
    this.name = (ctx._name && Token.from(ctx._name)) ?? null;
    this.destructure = (ctx._destructure && getDeclarationTrees(ctx._destructure.declaration() ?? [])) ?? [];
    this.hasParameters = ctx._params.filter((x) => !x.open().OPEN_BRACE()).length > 0;
    this.generics = getDeclarationTrees(ctx._params.filter((x) => x.open().OPEN_BRACE())[0]?.declaration() ?? []);
    this.parameters = getDeclarationTrees(ctx._params.filter((x) => !x.open().OPEN_BRACE())[0]?.declaration() ?? []);
    const type = ctx.valueType()?.expression();
    this.type = (type && getExpressionTree(type)) ?? null;

    const value = ctx.valueBody()?.expression();
    this.value = (value && getExpressionTree(value)) ?? null;

    const body = ctx.valueBody()?.body()?.source();
    this.body = (body && getSourceTree(body)) ?? null;

    const statements = this.body?.statements ?? [];
    statements
      .filter(
        (x) =>
          !(
            x instanceof DeclarationStatementTree ||
            x instanceof CommentStatementTree ||
            (x instanceof ExpressionStatementTree && x.expression instanceof IdExpressionTree)
          ),
      )
      .forEach((x) => x.addIssue(IssueLevel.error, 'Definition body should contain only parameters'));
    this.attributes = statements
      .filter(
        (x) =>
          x instanceof DeclarationStatementTree ||
          (x instanceof ExpressionStatementTree && x.expression instanceof IdExpressionTree),
      )
      .map((x) => x as DeclarationStatementTree | ExpressionStatementTree);

    this.addChildren(
      this.modifier,
      this.name,
      ...this.destructure,
      ...this.generics,
      ...this.parameters,
      this.type,
      this.value,
      this.body,
    );
  }
}
