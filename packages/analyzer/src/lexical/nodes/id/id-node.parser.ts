import {$IdNode, AnalyzerContext, IdNode, UNDERSCORE} from '#analyzer';
import {Nothing} from '#common';

export function parseIdNode(context: AnalyzerContext): IdNode | Nothing {
  return context.source.takeWhile(
    $IdNode,
    (x, i) => (i === 0 && x.isLetter()) || (i > 0 && x.isLetterOrDigit()) || UNDERSCORE.equals(x),
  );
}
