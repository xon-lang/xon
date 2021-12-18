import {
  AliasDefinitionContext,
  DefinitionContext,
  TypeDefinitionContext,
} from '../../grammar/xon-parser';
import { AliasDefinitionTree } from './alias/alias-definition-tree';
import { ClassDefinitionTree } from './class/class-definition-tree';
import { DefinitionTree } from './definition-tree';
import { InterfaceDefinitionTree } from './interface/interface-definition-tree';
import { ObjectDefinitionNode } from './object/object-definition-node';

export const getDefinitionTree = (ctx: DefinitionContext): DefinitionTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof AliasDefinitionContext) return new AliasDefinitionTree(ctx);
  if (ctx instanceof TypeDefinitionContext) {
    if (ctx.definitionModifier().CLASS()) return new ClassDefinitionTree(ctx);
    if (ctx.definitionModifier().INTERFACE()) return new InterfaceDefinitionTree(ctx);
    if (ctx.definitionModifier().OBJECT()) return new ObjectDefinitionNode(ctx);
  }

  throw Error(`Definition tree not found for "${ctx.constructor.name}"`);
};

export const getDefinitionsTrees = (contexts: DefinitionContext[]): DefinitionTree[] =>
  contexts?.map(getDefinitionTree) || [];
