import {
  $StringInterpolationCloseNode,
  AnalyzerContext,
  STRING_INTERPOLATION_CLOSE,
  StringInterpolationCloseNode,
} from '#analyzer';
import {Nothing} from '#core';

export function parseStringInterpolationCloseNode(
  context: AnalyzerContext,
): StringInterpolationCloseNode | Nothing {
  return context.source.takeCharacter($StringInterpolationCloseNode(), STRING_INTERPOLATION_CLOSE);
}
