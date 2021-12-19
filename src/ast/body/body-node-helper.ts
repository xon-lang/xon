import {
  AttributeContext,
  MethodAttributeContext,
  ObjectAttributeContext,
  ValueAttributeContext,
} from '../../grammar/xon-parser';
import { BodyNode } from './body-node';
import { MethodAttributeNode } from './multiple/multiple-body-node';
import { ObjectAttributeNode } from './object/object-attribute-node';
import { ValueAttributeNode } from './single/single-body-node';

export const getAttributeNode = (ctx: AttributeContext): BodyNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof MethodAttributeContext) return new MethodAttributeNode(ctx);
  if (ctx instanceof ObjectAttributeContext) return new ObjectAttributeNode(ctx);
  if (ctx instanceof ValueAttributeContext) return new ValueAttributeNode(ctx);
};

export const getAttributeNodes = (contexts: AttributeContext[]): BodyNode[] => {
  return contexts?.map((x) => getAttributeNode(x));
};
