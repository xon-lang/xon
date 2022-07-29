import { DeclarationContext } from '../../grammar/xon-parser';
import { DeclarationTree } from './declaration-tree';

export const getDeclarationTree = (ctx: DeclarationContext): DeclarationTree | null => {
  if (!ctx) return null;

  return new DeclarationTree(ctx);
};

export const getDeclarationTrees = (contexts: DeclarationContext[]): DeclarationTree[] => {
  return contexts?.map((x) => getDeclarationTree(x)) || [];
};
