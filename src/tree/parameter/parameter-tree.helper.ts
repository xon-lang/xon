import {
  FunctionParametersContext,
  IndexParametersContext,
  LambdaParametersContext,
  ParameterContext,
} from '../../grammar/xon-parser';
import { ParameterTree } from './parameter.tree';

export const getParameterTree = (ctx: ParameterContext): ParameterTree => {
  if (ctx === undefined) return undefined;
  return new ParameterTree(ctx);
};

export const getParametersTrees = (
  args:
    | ParameterContext[]
    | FunctionParametersContext
    | IndexParametersContext
    | LambdaParametersContext,
): ParameterTree[] => {
  if (args instanceof FunctionParametersContext) return args.parameter().map(getParameterTree);
  if (args instanceof IndexParametersContext) return args.parameter().map(getParameterTree);
  if (args instanceof LambdaParametersContext) return args.parameter().map(getParameterTree);

  return args?.map(getParameterTree) || [];
};
