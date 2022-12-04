import { ArgumentContext } from '~/grammar/xon-parser';
import { ArgumentTree } from '~/tree/argument/argument-tree';

export function getArgumentTree(ctx: ArgumentContext): ArgumentTree {
  return new ArgumentTree(ctx);
}
