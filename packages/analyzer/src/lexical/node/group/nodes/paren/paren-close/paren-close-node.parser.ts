import {$ParenCloseNode, AnalyzerContext, PAREN_CLOSE, ParenCloseNode} from '#analyzer';
import {Nothing} from '#common';

export function parseParenCloseNode(context: AnalyzerContext): ParenCloseNode | Nothing {
  return context.source.takeWhile(
    $ParenCloseNode,
    (x, i) => PAREN_CLOSE.at2(i).equals(x),
    PAREN_CLOSE.count(),
  );
}
