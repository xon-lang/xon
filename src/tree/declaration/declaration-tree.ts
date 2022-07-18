// this code was generated

import { DeclarationContext } from '../../grammar/xon-parser';
import { IssueLevel } from '../../issue-service/issue-level';
import { Boolean, None } from '../../lib/core';
import { DeclarationMetadata } from '../../metadata/declaration/declaration-metadata';
import { SourceRange } from '../../util/source-range';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { SourceTree } from '../source/source-tree';
import { getSourceTree } from '../source/source-tree-helper';
import { CommentStatementTree } from '../statement/comment/comment-statement-tree';
import { DeclarationStatementTree } from '../statement/declaration/declaration-statement-tree';
import { ExpressionStatementTree } from '../statement/expression/expression-statement-tree';
import { Tree } from '../tree';
import { getDeclarationTrees } from './declaration-tree-helper';

export class DeclarationTree extends Tree {
  ctx: DeclarationContext;
  metadata: DeclarationMetadata;
  sourceRange: SourceRange;
  modifier: IdTree;
  name?: IdTree;
  destructure: DeclarationTree[];
  hasParameters: Boolean;
  generics: DeclarationTree[];
  parameters: DeclarationTree[];
  type?: ExpressionTree | None;
  value?: ExpressionTree | None;
  body?: SourceTree | None;
  attributes: (DeclarationStatementTree | ExpressionStatementTree)[];

  constructor(ctx: DeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.modifier = getIdTree(ctx._modifier);
    this.name = getIdTree(ctx._name);
    this.destructure = getDeclarationTrees(ctx._destructure?.declaration());
    this.hasParameters = !!ctx._params.filter((x) => !x.open().LESS()).length;
    this.generics = getDeclarationTrees(
      ctx._params.filter((x) => x.open().LESS())[0]?.declaration(),
    );
    this.parameters = getDeclarationTrees(
      ctx._params.filter((x) => !x.open().LESS())[0]?.declaration(),
    );
    this.type = getExpressionTree(ctx.valueType()?.expression());
    this.value = getExpressionTree(ctx.valueBody()?.expression());
    this.body = getSourceTree(ctx.valueBody()?.body()?.source());

    this.body = getSourceTree(ctx.valueBody()?.body()?.source());
    const statements = this.body?.statements || [];
    statements
      .filter(
        (x) =>
          !(
            x instanceof DeclarationStatementTree ||
            x instanceof CommentStatementTree ||
            (x instanceof ExpressionStatementTree && x.expression instanceof IdExpressionTree)
          ),
      )
      .forEach((x) =>
        x.addIssue(IssueLevel.error, 'Definition body should contain only parameters'),
      );
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

// this code was generated
