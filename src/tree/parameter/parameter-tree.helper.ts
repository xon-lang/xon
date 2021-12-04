import { MethodParametersContext, ParameterContext } from '../../grammar/xon-parser';
import { ParameterTree } from './parameter.tree';

export const getParameterTree = (ctx: ParameterContext): ParameterTree => {
  if (ctx === undefined) return undefined;
  return new ParameterTree(ctx);
};

export const getParametersTrees = (
  contexts: ParameterContext[] | MethodParametersContext,
): ParameterTree[] => {
  if (Array.isArray(contexts)) return contexts.map(getParameterTree);
  return contexts?.parameter().map(getParameterTree) || [];
};
