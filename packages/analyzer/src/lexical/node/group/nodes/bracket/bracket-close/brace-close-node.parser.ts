import {$BracketCloseNode, AnalyzerContext, BRACKET_CLOSE, BracketCloseNode} from '#analyzer';
import {Nothing} from '#common';

export function parseBracketCloseNode(context: AnalyzerContext): BracketCloseNode | Nothing {
  return context.source.takeWhile(
    $BracketCloseNode,
    (x, i) => BRACKET_CLOSE.at2(i).equals(x),
    BRACKET_CLOSE.count(),
  );
}
