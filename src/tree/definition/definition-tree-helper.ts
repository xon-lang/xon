import {
  AliasDefinitionContext,
  AttributeDefinitionContext,
  ClassDefinitionContext,
  DefinitionContext,
} from '../../grammar/xon-parser';
import { AliasDefinitionTree } from './alias/alias-definition-tree';
import { AttributeDefinitionTree } from './object/attribute-definition-tree';
import { ClassDefinitionTree } from './class/class-definition-tree';
import { DefinitionTree } from './definition-tree';

export const getDefinitionTree = (ctx: DefinitionContext): DefinitionTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AliasDefinitionContext) return new AliasDefinitionTree(ctx);
  if (ctx instanceof AttributeDefinitionContext) return new AttributeDefinitionTree(ctx);
  if (ctx instanceof ClassDefinitionContext) return new ClassDefinitionTree(ctx);

  throw Error(`Definition tree not found for "${ctx.constructor.name}"`);
};

export const getDefinitionsTrees = (contexts: DefinitionContext[]): DefinitionTree[] =>
  contexts?.map(getDefinitionTree) || [];
