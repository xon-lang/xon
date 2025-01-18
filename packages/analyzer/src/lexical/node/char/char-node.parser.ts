import {
  AnalyzerContext,
  CharNode,
  newCharNode,
  parseCharCloseNode,
  parseCharContentNode,
  parseCharOpenNode,
} from '#analyzer';
import {nothing, Nothing} from '#common';

export function parseCharNode(context: AnalyzerContext): CharNode | Nothing {
  const openNode = parseCharOpenNode(context);

  if (!openNode) {
    return nothing;
  }

  const contentNode = parseCharContentNode(context);
  const closeNode = parseCharCloseNode(context);

  return newCharNode(context, openNode, contentNode, closeNode);
}
