import { TypeParameterContext } from '../../grammar/xon-parser';
import { TypeParameterTree } from './type-parameter.tree';

export const getTypeParameterTree = (ctx: TypeParameterContext): TypeParameterTree => {
  if (ctx === undefined) return undefined;

  return new TypeParameterTree(ctx);
};

export const getTypeParametersTrees = (
  parameters?: TypeParameterContext[],
): TypeParameterTree[] => {
  return parameters?.map(getTypeParameterTree) || [];
};
