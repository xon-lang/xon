import {
  $StringInterpolationOpenNode,
  AnalyzerContext,
  STRING_INTERPOLATION_OPEN,
  StringInterpolationOpenNode,
} from '#analyzer';
import {Nothing} from '#common';

export function parseStringInterpolationOpenNode(
  context: AnalyzerContext,
): StringInterpolationOpenNode | Nothing {
  return context.source.takeWhile(
    $StringInterpolationOpenNode(),
    (x, i) => STRING_INTERPOLATION_OPEN.at2(i).equals(x),
    STRING_INTERPOLATION_OPEN.count(),
  );
}
