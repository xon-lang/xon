import {
  AbstractAttributeContext,
  AttributeContext,
  MethodAttributeContext,
  ValueAttributeContext,
} from '../../grammar/xon-parser';
import { AbstractAttributeTree } from './abstract/abstract-attribute-tree';
import { AttributeTree } from './attribute-tree';
import { MethodAttributeTree } from './method/method-attribute-tree';
import { ValueAttributeTree } from './value/value-attribute-tree';

export const getAttributeTree = (ctx: AttributeContext): AttributeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AbstractAttributeContext) return new AbstractAttributeTree(ctx);
  if (ctx instanceof ValueAttributeContext) return new ValueAttributeTree(ctx);
  if (ctx instanceof MethodAttributeContext) return new MethodAttributeTree(ctx);
};

export const getAttributesTrees = (ctx: AttributeContext[]): AttributeTree[] => {
  return ctx?.map((x) => getAttributeTree(x));
};
