import { AttributeContext } from '../../grammar/xon-parser';
import { AttributeTree } from './attribute-tree';

export const getAttributeTree = (ctx: AttributeContext): AttributeTree => {
  if (ctx === undefined) return undefined;

  return new AttributeTree(ctx);
};

export const getAttributeTrees = (contexts: AttributeContext[]): AttributeTree[] => {
  return contexts?.map((x) => getAttributeTree(x)) || [];
};
