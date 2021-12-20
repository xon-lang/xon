import { DefinitionContext } from '../../grammar/xon-parser';
import { AliasDefinitionNode } from './alias/alias-definition-tree';
import { ClassDefinitionTree } from './class/class-definition-tree';
import { DefinitionNode } from './definition-node';
import { InterfaceDefinitionTree } from './interface/interface-definition-tree';
import { ObjectDefinitionNode } from './object/object-definition-node';

export const getDefinitionNode = (ctx: DefinitionContext): DefinitionNode => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof DefinitionContext) {
    if (ctx.definitionModifier().TYPE()) return new AliasDefinitionNode(ctx);
    if (ctx.definitionModifier().CLASS()) return new ClassDefinitionTree(ctx);
    if (ctx.definitionModifier().INTERFACE()) return new InterfaceDefinitionTree(ctx);
    if (ctx.definitionModifier().OBJECT()) return new ObjectDefinitionNode(ctx);
  }

  throw Error(`Definition tree not found for "${ctx.constructor.name}"`);
};

export const getDefinitionNodes = (contexts: DefinitionContext[]): DefinitionNode[] =>
  contexts?.map(getDefinitionNode) || [];
