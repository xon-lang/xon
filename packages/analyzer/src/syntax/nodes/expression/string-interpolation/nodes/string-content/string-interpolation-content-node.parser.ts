import {
  $StringInterpolationContentNode,
  AnalyzerContext,
  BRACE_OPEN,
  STRING_INTERPOLATION_CLOSE,
  StringInterpolationContentNode,
} from '#analyzer';
import {Nothing} from '#core';

export function parseInterpolationStringContentNode(
  context: AnalyzerContext,
): StringInterpolationContentNode | Nothing {
  return context.source.takeWhile(
    $StringInterpolationContentNode(),
    (x) => !x.equals(BRACE_OPEN) && !x.equals(STRING_INTERPOLATION_CLOSE),
  );
}
