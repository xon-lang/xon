import { DeclarationContext } from '~/grammar/xon-parser';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';

export function getDeclarationTree(ctx: DeclarationContext): DeclarationTree {
  return new DeclarationTree(ctx);
  // Issue.errorFromContext(ctx, `Declaration tree not found for "${ctx.constructor.name}"`);
}
