import { DeclarationContext } from '../../grammar/xon-parser';
import { DeclarationNode } from './declaration-node';

export const getDeclarationNode = (ctx: DeclarationContext): DeclarationNode => {
  if (ctx === undefined) return undefined;
  return new DeclarationNode(ctx);
};

export const getDeclarationNodes = (contexts: DeclarationContext[]): DeclarationNode[] => {
  return contexts?.map((x) => getDeclarationNode(x)) || [];
};
