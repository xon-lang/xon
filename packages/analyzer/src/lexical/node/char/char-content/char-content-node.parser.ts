import {$CharContentNode, AnalyzerContext, CHAR_CLOSE, CharContentNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCharContentNode(context: AnalyzerContext): CharContentNode | Nothing {
  return context.source.takeWhile($CharContentNode, (_x, i, z) => !z.startsWith(CHAR_CLOSE, i));
}
