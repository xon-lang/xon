import {$CharCloseNode, AnalyzerContext, CHAR_CLOSE, CharCloseNode} from '#analyzer';
import {Nothing} from '#common';

export function parseCharCloseNode(context: AnalyzerContext): CharCloseNode | Nothing {
  return context.source.takeWhile($CharCloseNode, (x, i) => CHAR_CLOSE.at2(i).equals(x), CHAR_CLOSE.count());
}
