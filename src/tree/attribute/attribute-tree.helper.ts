import {
  AbstractAttributeContext,
  AttributeContext,
  MethodAttributeContext,
  ObjectAttributeContext,
  ValueAttributeContext,
} from '../../grammar/xon-parser';
import { AbstractAttributeTree } from './abstract/abstract-attribute-tree';
import { AttributeTree } from './attribute-tree';
import { MethodAttributeTree } from './method/method-attribute-tree';
import { ObjectAttributeTree } from './object/object-attribute-tree';
import { ValueAttributeTree } from './value/value-attribute-tree';

export const getAttributeTree = (ctx: AttributeContext): AttributeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AbstractAttributeContext) return new AbstractAttributeTree(ctx);
  if (ctx instanceof MethodAttributeContext) return new MethodAttributeTree(ctx);
  if (ctx instanceof ObjectAttributeContext) return new ObjectAttributeTree(ctx);
  if (ctx instanceof ValueAttributeContext) return new ValueAttributeTree(ctx);
};

export const getAttributesTrees = (contexts: AttributeContext[]): AttributeTree[] => {
  return contexts?.map((x) => getAttributeTree(x));
};
