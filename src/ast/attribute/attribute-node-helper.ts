import { AttributeContext } from '../../grammar/xon-parser';
import { AttributeNode } from './attribute-node';

export const getAttributeNode = (ctx: AttributeContext): AttributeNode => {
  if (ctx === undefined) return undefined;
  return new AttributeNode(ctx);
};

export const getAttributeNodes = (contexts: AttributeContext[]): AttributeNode[] => {
  return contexts?.map((x) => getAttributeNode(x)) || [];
};
