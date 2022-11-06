import { ArgumentContext } from '~/grammar/xon-parser';
import { ArgumentTree } from '~/tree/argument/argument-tree';

export function getArgumentTree(ctx: ArgumentContext): ArgumentTree {
  if (!ctx) return null;
  return new ArgumentTree(ctx);
}

export function getArgumentTrees(contexts: ArgumentContext[]): ArgumentTree[] {
  return contexts?.map((x) => getArgumentTree(x)) || [];
}
