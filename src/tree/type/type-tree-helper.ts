import { TypeContext } from '~/grammar/xon-parser';
import { TypeTree } from '~/tree/type/type-tree';

export function getTypeTree(ctx: TypeContext): TypeTree {
  return new TypeTree(ctx);
}
