import {
  AttributeContext,
  DefinitionAttributeContext,
  MethodAttributeContext,
  ValueAttributeContext,
} from '../../grammar/xon-parser';
import { AttributeTree } from './attribute-tree';
import { DefinitionAttributeTree } from './definition/definition-attribute-tree';
import { MethodAttributeTree } from './method/method-attribute-tree';
import { ValueAttributeTree } from './value/value-attribute-tree';

export const getAttributeTree = (ctx: AttributeContext): AttributeTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ValueAttributeContext) return new ValueAttributeTree(ctx);
  if (ctx instanceof MethodAttributeContext) return new MethodAttributeTree(ctx);
  if (ctx instanceof DefinitionAttributeContext) return new DefinitionAttributeTree(ctx);
};

export const getAttributesTrees = (ctx: AttributeContext[]): AttributeTree[] => {
  return ctx?.map((x) => getAttributeTree(x));
};
