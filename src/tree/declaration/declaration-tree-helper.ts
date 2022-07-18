import { DeclarationContext } from '../../grammar/xon-parser';
import { None, none } from '../../lib/core';
import { DeclarationTree } from './declaration-tree';

export const getDeclarationTree = (ctx: DeclarationContext): DeclarationTree | None => {
  if (!ctx) {
    return none;
  }
  return new DeclarationTree(ctx);
};

export const getDeclarationTrees = (contexts: DeclarationContext[]): DeclarationTree[] => {
  return contexts?.map((x) => getDeclarationTree(x)) || [];
};
