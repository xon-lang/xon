import {
  AnalyzerContext,
  ExpressionNode,
  parseCharacterNode,
  parseNumberNode,
  parseStringInterpolationNode,
  parseStringNode,
} from '#analyzer';
import {Nothing} from '#core';

export function parseExpression(context: AnalyzerContext): ExpressionNode | Nothing {
  return (
    parseNumberNode(context) ??
    parseCharacterNode(context) ??
    parseStringNode(context) ??
    parseStringInterpolationNode(context)
  );
}
