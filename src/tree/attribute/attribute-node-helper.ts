import {
  AttributeContext,
  MethodAttributeContext,
  ObjectAttributeContext,
  ValueAttributeContext,
} from '../../grammar/xon-parser';
import { AttributeTree } from './attribute-node';
import { MethodAttributeTree } from './method/method-attribute-node';
import { ObjectAttributeNode } from './object/object-attribute-node';
import { ValueAttributeNode } from './value/value-attribute-node';

export const getAttributeNode = (ctx: AttributeContext): AttributeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof MethodAttributeContext) return new MethodAttributeTree(ctx);
  if (ctx instanceof ObjectAttributeContext) return new ObjectAttributeNode(ctx);
  if (ctx instanceof ValueAttributeContext) return new ValueAttributeNode(ctx);
};

export const getAttributeNodes = (contexts: AttributeContext[]): AttributeTree[] => {
  return contexts?.map((x) => getAttributeNode(x));
};
