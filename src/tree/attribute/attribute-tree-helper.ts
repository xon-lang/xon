import { AttributeContext } from '../../grammar/xon-parser';
import { none } from '../../lib/core';
import { AttributeTree } from './attribute-tree';

export const getAttributeTree = (ctx: AttributeContext): AttributeTree => {
  if (!ctx) return none;

  return new AttributeTree(ctx);
};

export const getAttributeTrees = (contexts: AttributeContext[]): AttributeTree[] => {
  return contexts?.map((x) => getAttributeTree(x)) || [];
};
