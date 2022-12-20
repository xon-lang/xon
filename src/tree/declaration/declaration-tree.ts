import { DeclarationContext } from '~/grammar/xon-parser';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { BodyTree } from '~/tree/body/body-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { Tree } from '~/tree/tree';

// type DeclarationCtx = DeclarationContext & {
//   type: () => TypeContext | undefined;
//   value: () => ValueContext | undefined;
// };

export abstract class DeclarationTree extends Tree {
  abstract ctx: DeclarationContext;
  metadata: DeclarationMetadata | null = null;
  type: ExpressionTree | null = null;
  value: ExpressionTree | BodyTree | null = null;
  // colonToken: Token | null;
  // assignToken: Token | null;

  // public constructor(ctx: DeclarationCtx) {
  //   super();

  // this.ctx = ctx;
  // this.sourceSpan = SourceSpan.fromContext(ctx);

  // const type = ctx.type() ?? null;
  // const value = ctx.value() ?? null;

  // const typeExpression = type?.expression() ?? null;
  // const valueExpression = value?.expression() ?? null;
  // const valueBody = value?.body() ?? null;

  // const colon = type?.COLON() ?? null;
  // const assign = value?.ASSIGN() ?? null;
  // this.colonToken = colon && Token.from(colon);
  // this.assignToken = assign && Token.from(assign);
  // this.type = typeExpression && getExpressionTree(typeExpression);
  // this.value = (valueExpression && getExpressionTree(valueExpression)) || (valueBody && getBodyTree(valueBody));
  // }
}
