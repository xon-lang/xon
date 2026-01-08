import {$UnknownNode, AnalyzerContext, newUnknownNode, UnknownNode} from '#analyzer';
import {nothing, Nothing} from '#core';

export function parseUnknownNode(context: AnalyzerContext): UnknownNode | Nothing {
  const node = context.source.takeWhile($UnknownNode(), (_, i) => i === 0);

  if (!node) {
    return nothing;
  }

  return newUnknownNode(node.text, node.range);
}
