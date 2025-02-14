import {$BracketOpenNode, AnalyzerContext, BRACKET_OPEN, BracketOpenNode} from '#analyzer';
import {Nothing} from '#common';

export function parseBracketOpenNode(context: AnalyzerContext): BracketOpenNode | Nothing {
  return context.source.takeWhile(
    $BracketOpenNode,
    (x, i) => BRACKET_OPEN.at2(i).equals(x),
    BRACKET_OPEN.count(),
  );
}
