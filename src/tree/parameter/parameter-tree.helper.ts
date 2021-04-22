import { ParameterContext, ParametersContext } from '../../grammar/xon-parser';
import { ParameterTree } from './parameter.tree';

export const getParameterTree = (ctx: ParameterContext): ParameterTree => {
  if (ctx === undefined) return undefined;
  return new ParameterTree(ctx);
};

export const getParametersTrees = (
  args: ParameterContext[] | ParametersContext,
): ParameterTree[] => {
  if (args instanceof ParametersContext) return args.parameter().map(getParameterTree);
  return args?.map(getParameterTree) || [];
};
