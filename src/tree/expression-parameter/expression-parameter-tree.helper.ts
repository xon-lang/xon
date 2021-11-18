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
  parameters:
    | ExpressionParameterContext[]
    | FunctionParametersContext
    | IndexParametersContext
    | LambdaParametersContext,
): ExpressionParameterTree[] => {
  if (!parameters) return [];

  if (Array.isArray(parameters)) return parameters.map(getExpressionParameterTree);
  return parameters.expressionParameter().map(getExpressionParameterTree);
};
