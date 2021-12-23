import {
  AttrContext,
  MethodAttributeContext,
  ValueAttributeContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { AttributeNode } from './attribute-node';
import { MethodAttributeNode } from './method/method-attribute-node';
import { ValueAttributeNode } from './value/value-attribute-node';

export const getAttributeNode = (ctx: AttrContext): AttributeNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof ValueAttributeContext) return new ValueAttributeNode(ctx);
  if (ctx instanceof MethodAttributeContext) return new MethodAttributeNode(ctx);

  throw Issue.error(ctx, `Attribute node not found for '${ctx.constructor.name}'`);
};

export const getAttributeNodes = (contexts: AttrContext[]): AttributeNode[] => {
  return contexts?.map(getAttributeNode) || [];
};
