import { DeclarationContext } from '~/grammar';
import { IssueLevel } from '~/issue';
import { Boolean2 } from '~/lib';
import { DeclarationMetadata } from '~/metadata';
import {
  CommentStatementTree,
  DeclarationStatementTree,
  ExpressionStatementTree,
  ExpressionTree,
  getDeclarationTrees,
  getExpressionTree,
  getIdTree,
  getSourceTree,
  IdExpressionTree,
  IdTree,
  SourceTree,
  Tree,
} from '~/tree';
import { SourceRange } from '~/util';

export class DeclarationTree extends Tree {
  ctx: DeclarationContext;
  metadata: DeclarationMetadata;
  sourceRange: SourceRange;
  modifier?: IdTree | null;
  name?: IdTree;
  destructure: DeclarationTree[];
  hasParameters: Boolean2;
  generics: DeclarationTree[];
  parameters: DeclarationTree[];
  type?: ExpressionTree | null;
  value?: ExpressionTree | null;
  body?: SourceTree | null;
  attributes: (DeclarationStatementTree | ExpressionStatementTree)[];

  constructor(ctx: DeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.modifier = getIdTree(ctx._modifier);
    this.name = getIdTree(ctx._name);
    this.destructure = getDeclarationTrees(ctx._destructure?.declaration());
    this.hasParameters = ctx._params.filter((x) => !x.open().LESS()).length > 0;
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
