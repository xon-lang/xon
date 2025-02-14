import {$BraceCloseNode, AnalyzerContext, BRACE_CLOSE, BraceCloseNode} from '#analyzer';
import {Nothing} from '#common';

export function parseBraceCloseNode(context: AnalyzerContext): BraceCloseNode | Nothing {
  return context.source.takeWhile(
    $BraceCloseNode,
    (x, i) => BRACE_CLOSE.at2(i).equals(x),
    BRACE_CLOSE.count(),
  );
}
