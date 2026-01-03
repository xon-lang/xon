import {$JoiningWhitespaceNode, AnalyzerContext, CR, JoiningWhitespaceNode, LF, SPACE} from '#analyzer';
import {Nothing} from '#core';

export function parseJoiningWhitespaceNode(context: AnalyzerContext): JoiningWhitespaceNode | Nothing {
  return context.source.takeWhile(
    $JoiningWhitespaceNode(),
    (x) => x.equals(SPACE) || x.equals(CR) || x.equals(LF),
  );
}
