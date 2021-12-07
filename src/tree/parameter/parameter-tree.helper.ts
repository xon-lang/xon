import {
  LambdaParameterContext,
  LambdaParametersContext,
  ObjectParametersContext,
  ParameterContext,
} from '../../grammar/xon-parser';
import { ParameterTree } from './parameter.tree';

export const getParameterTree = (ctx: ParameterContext | LambdaParameterContext): ParameterTree => {
  if (ctx === undefined) return undefined;
  return new ParameterTree(ctx);
};

export const getParametersTrees = (
  contexts: ParameterContext[] | LambdaParametersContext | ObjectParametersContext,
): ParameterTree[] => {
  if (!contexts) return [];

  if (contexts instanceof LambdaParametersContext)
    return contexts.lambdaParameter().map((x) => getParameterTree(x));

  if (contexts instanceof ObjectParametersContext)
    return contexts.parameter().map((x) => getParameterTree(x));

  return contexts.map((x) => getParameterTree(x));
};
