import { ArgumentContext, ArgumentsContext } from '../../grammar/xon-parser';
import { ArgumentTree } from './argument.tree';

export const getArgumentTree = (ctx: ArgumentContext): ArgumentTree => {
  if (ctx === undefined) return undefined;
  return new ArgumentTree(ctx);
};

export const getArgumentsTrees = (args: ArgumentContext[] | ArgumentsContext): ArgumentTree[] => {
  if (args instanceof ArgumentsContext) return args.argument().map(getArgumentTree);
  return args?.map(getArgumentTree) || [];
};
