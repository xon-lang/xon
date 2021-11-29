import { TypeParameterContext, TypeParametersContext } from '../../grammar/xon-parser';
import { TypeParameterTree } from './type-parameter.tree';

export const getTypeParameterTree = (ctx: TypeParameterContext): TypeParameterTree => {
  if (ctx === undefined) return undefined;

  return new TypeParameterTree(ctx);
};

export const getTypeParametersTrees = (
  contexts: TypeParameterContext[] | TypeParametersContext,
): TypeParameterTree[] => {
  if (Array.isArray(contexts)) return contexts.map(getTypeParameterTree);
  return contexts?.typeParameter().map(getTypeParameterTree) || [];
};
