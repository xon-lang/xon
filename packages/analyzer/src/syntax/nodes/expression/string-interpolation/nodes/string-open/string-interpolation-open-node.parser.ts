import {
  $StringInterpolationOpenNode,
  AnalyzerContext,
  STRING_INTERPOLATION_OPEN,
  StringInterpolationOpenNode,
} from '#analyzer';
import {Nothing} from '#core';

export function parseStringInterpolationOpenNode(
  context: AnalyzerContext,
): StringInterpolationOpenNode | Nothing {
  return context.source.takeText($StringInterpolationOpenNode(), STRING_INTERPOLATION_OPEN);
}
