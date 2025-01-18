import {$StringOpenNode, AnalyzerContext, STRING_OPEN, StringOpenNode} from '#analyzer';
import {Nothing} from '#common';

export function parseStringOpenNode(context: AnalyzerContext): StringOpenNode | Nothing {
  return context.source.takeWhile(
    $StringOpenNode,
    (x, i) => STRING_OPEN.at2(i).equals(x),
    STRING_OPEN.count(),
  );
}
