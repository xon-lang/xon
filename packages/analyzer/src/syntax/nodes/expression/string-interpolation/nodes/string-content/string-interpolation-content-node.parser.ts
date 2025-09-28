import {
  $StringInterpolationContentNode,
  AnalyzerContext,
  BRACE_OPEN,
  STRING_INTERPOLATION_CLOSE,
  StringInterpolationContentNode,
} from '#analyzer';
import {Nothing} from '#common';

export function parseInterpolationStringContentNode(
  context: AnalyzerContext,
): StringInterpolationContentNode | Nothing {
  return context.source.takeWhile(
    $StringInterpolationContentNode(),
    (_x, i, z) => !z.startsWith(STRING_INTERPOLATION_CLOSE, i) && !z.startsWith(BRACE_OPEN, i),
  );
}
