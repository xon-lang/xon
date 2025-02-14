import {$StringContentNode, AnalyzerContext, STRING_CLOSE, StringContentNode} from '#analyzer';
import {Nothing} from '#common';

export function parseStringContentNode(context: AnalyzerContext): StringContentNode | Nothing {
  return context.source.takeWhile($StringContentNode, (_x, i, z) => !z.startsWith(STRING_CLOSE, i));
}
