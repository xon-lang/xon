import { ExpressionParameterContext, MethodParametersContext } from '../../grammar/xon-parser';
import { ExpressionParameterTree } from './expression-parameter.tree';

export const getExpressionParameterTree = (
  ctx: ExpressionParameterContext,
): ExpressionParameterTree => {
  if (ctx === undefined) return undefined;
  return new ExpressionParameterTree(ctx);
};

export const getExpressionParametersTrees = (
  contexts: ExpressionParameterContext[] | MethodParametersContext,
): ExpressionParameterTree[] => {
  if (Array.isArray(contexts)) return contexts.map(getExpressionParameterTree);
  return contexts?.expressionParameter().map(getExpressionParameterTree) || [];
};
