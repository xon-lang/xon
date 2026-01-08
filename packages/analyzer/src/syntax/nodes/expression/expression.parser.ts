import {AnalyzerContext, ExpressionNode, parseStringNode} from '#analyzer';
import {Nothing} from '#core';

export function parseExpression(context: AnalyzerContext): ExpressionNode | Nothing {
  return parseStringNode(context);
}
