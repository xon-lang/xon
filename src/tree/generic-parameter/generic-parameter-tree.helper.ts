import { GenericParameterContext } from '../../grammar/xon-parser';
import { GenericParameterTree } from './generic-parameter.tree';

export const getGenericParameterTree = (ctx: GenericParameterContext): GenericParameterTree => {
  if (ctx === undefined) return undefined;
  return new GenericParameterTree(ctx);
};

export const getGenericParametersTrees = (
  parameters: GenericParameterContext[],
): GenericParameterTree[] => {
  return parameters.map(getGenericParameterTree) || [];
};
