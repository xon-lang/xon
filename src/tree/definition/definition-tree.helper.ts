import { DefinitionContext } from '../../grammar/xon-parser';
import { DefinitionTree } from './definition.tree';

export const getDefinitionTree = (ctx: DefinitionContext): DefinitionTree => {
  if (ctx === undefined) return undefined;
  return new DefinitionTree(ctx);
};

export const getDefinitionsTrees = (definitions: DefinitionContext[]): DefinitionTree[] =>
  definitions?.map(getDefinitionTree) || [];
