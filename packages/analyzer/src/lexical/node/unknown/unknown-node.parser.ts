import {$UnknownNode, AnalyzerContext, UnknownNode} from '#analyzer';
import {Nothing} from '#common';

export function parseUnknownNode(context: AnalyzerContext): UnknownNode | Nothing {
  return context.source.takeWhile($UnknownNode, () => true, 1);
}
