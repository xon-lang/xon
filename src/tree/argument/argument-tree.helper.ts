import {
  ArgumentContext,
  FunctionArgumentsContext,
  IndexArgumentsContext,
} from '../../grammar/xon-parser';
import { ArgumentTree } from './argument.tree';

export const getArgumentTree = (ctx: ArgumentContext): ArgumentTree => {
  if (ctx === undefined) return undefined;
  return new ArgumentTree(ctx);
};

export const getArgumentsTrees = (
  args: ArgumentContext[] | FunctionArgumentsContext | IndexArgumentsContext,
): ArgumentTree[] => {
  if (args instanceof FunctionArgumentsContext || args instanceof IndexArgumentsContext)
    return args.argument().map(getArgumentTree);
  return args?.map(getArgumentTree) || [];
};
