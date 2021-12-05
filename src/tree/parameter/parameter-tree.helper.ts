import {
  ArrayParametersContext,
  LambdaParametersContext,
  ObjectParametersContext,
  ParameterContext,
} from '../../grammar/xon-parser';
import { ParameterTree } from './parameter.tree';

export const getParameterTree = (ctx: ParameterContext): ParameterTree => {
  if (ctx === undefined) return undefined;
  return new ParameterTree(ctx);
};

export const getParametersTrees = (
  contexts:
    | ParameterContext[]
    | LambdaParametersContext
    | ObjectParametersContext
    | ArrayParametersContext,
): ParameterTree[] => {
  if (!contexts) return [];
  if (Array.isArray(contexts)) return contexts.map((x) => getParameterTree(x));
  return getParametersTrees(contexts.parameter());
};
