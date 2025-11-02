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
  return context.source.takeWhile(
    $StringInterpolationCloseNode(),
    (x, i) => STRING_INTERPOLATION_CLOSE.at2(i).equals(x),
    STRING_INTERPOLATION_CLOSE.count(),
  );
}
