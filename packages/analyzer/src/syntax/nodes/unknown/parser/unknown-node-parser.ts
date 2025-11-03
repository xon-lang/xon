import {$UnknownNode, AnalyzerContext, newUnknownNode, UnknownNode} from '#analyzer';
import {nothing, Nothing} from '#core';

export function parseUnknownNode(context: AnalyzerContext): UnknownNode | Nothing {
  const result = context.source.takeWhile($UnknownNode(), () => true, 1);

  if (!result) {
    return nothing;
  }

  return newUnknownNode(result.text, result.range);
}
