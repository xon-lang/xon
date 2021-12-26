import { DeclarationContext } from '../../grammar/xon-parser';
import { DeclarationTree } from './declaration-tree';

export const getDeclarationTree = (ctx: DeclarationContext): DeclarationTree => {
  if (ctx === undefined) return undefined;
  return new DeclarationTree(ctx);
};

export const getDeclarationTrees = (contexts: DeclarationContext[]): DeclarationTree[] => {
  return contexts?.map((x) => getDeclarationTree(x)) || [];
};
