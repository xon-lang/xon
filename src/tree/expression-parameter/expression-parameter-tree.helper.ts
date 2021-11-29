import { ExpressionParameterContext, FunctionParametersContext } from '../../grammar/xon-parser';
import { ExpressionParameterTree } from './expression-parameter.tree';

export const getExpressionParameterTree = (
  ctx: ExpressionParameterContext,
): ExpressionParameterTree => {
  if (ctx === undefined) return undefined;
  return new ExpressionParameterTree(ctx);
};

export const getExpressionParametersTrees = (
  contexts: ExpressionParameterContext[] | FunctionParametersContext,
): ExpressionParameterTree[] => {
  if (Array.isArray(contexts)) return contexts.map(getExpressionParameterTree);
  return contexts?.expressionParameter().map(getExpressionParameterTree) || [];
};
