import {$CharOpenNode, AnalyzerContext, CHAR_OPEN, CharOpenNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCharOpenNode(context: AnalyzerContext): CharOpenNode | Nothing {
  return context.source.takeWhile($CharOpenNode, (x) => CHAR_OPEN.equals(x), CHAR_OPEN.count());
}
