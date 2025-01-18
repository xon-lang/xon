import {$StringCloseNode, AnalyzerContext, STRING_CLOSE, StringCloseNode} from '#analyzer';
import {Nothing} from '#common';

export function parseStringCloseNode(context: AnalyzerContext): StringCloseNode | Nothing {
  return context.source.takeWhile(
    $StringCloseNode,
    (x, i) => STRING_CLOSE.at2(i).equals(x),
    STRING_CLOSE.count(),
  );
}
