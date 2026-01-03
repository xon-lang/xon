import {$StringContentNode, AnalyzerContext, STRING_CLOSE, StringContentNode} from '#analyzer';
import {Nothing} from '#core';

export function parseStringContentNode(context: AnalyzerContext): StringContentNode | Nothing {
  return context.source.takeWhile($StringContentNode(), (x) => !x.equals(STRING_CLOSE));
}
