import {
  ExpressionParameterContext,
  FunctionParametersContext,
  IndexParametersContext,
  LambdaParametersContext,
} from '../../grammar/xon-parser';
import { ExpressionParameterTree } from './expression-parameter.tree';

export const getExpressionParameterTree = (
  ctx: ExpressionParameterContext,
): ExpressionParameterTree => {
  if (ctx === undefined) return undefined;
  return new ExpressionParameterTree(ctx);
};

export const getExpressionParametersTrees = (
  args:
    | ExpressionParameterContext[]
    | FunctionParametersContext
    | IndexParametersContext
    | LambdaParametersContext,
): ExpressionParameterTree[] => {
  if (Array.isArray(args)) return args?.map(getExpressionParameterTree) || [];
  return args.expressionParameter().map(getExpressionParameterTree);
};
