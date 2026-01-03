import {
  AnalyzerContext,
  JoiningNode,
  newJoiningNode,
  parseJoiningStartNode,
  parseJoiningWhitespaceNode,
} from '#analyzer';
import {nothing, Nothing} from '#core';

export function parseJoiningNode(context: AnalyzerContext): JoiningNode | Nothing {
  const start = parseJoiningStartNode(context);

  if (!start) {
    return nothing;
  }

  const whitespace = parseJoiningWhitespaceNode(context);
  const node = newJoiningNode(start, whitespace);
  context.hiddenNodes.addLastItem(node);

  return node;
}
