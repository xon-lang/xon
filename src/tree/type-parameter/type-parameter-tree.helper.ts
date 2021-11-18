import { TypeParameterContext, TypeParametersContext } from '../../grammar/xon-parser';
import { TypeParameterTree } from './type-parameter.tree';

export const getTypeParameterTree = (ctx: TypeParameterContext): TypeParameterTree => {
  if (ctx === undefined) return undefined;

  return new TypeParameterTree(ctx);
};

export const getTypeParametersTrees = (
  parameters?: TypeParameterContext[] | TypeParametersContext,
): TypeParameterTree[] => {
  if (!parameters) return [];

  if (Array.isArray(parameters)) return parameters.map(getTypeParameterTree);
  return parameters.typeParameter().map(getTypeParameterTree);
};
