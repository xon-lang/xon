import {
  AnalyzerContext,
  CharacterNode,
  newCharacterNode,
  parseCharacterCloseNode,
  parseCharacterContentNode,
  parseCharacterOpenNode,
} from '#analyzer';
import {nothing, Nothing} from '#common';

export function parseCharacterNode(context: AnalyzerContext): CharacterNode | Nothing {
  const openNode = parseCharacterOpenNode(context);

  if (!openNode) {
    return nothing;
  }

  const contentNode = parseCharacterContentNode(context);
  const closeNode = parseCharacterCloseNode(context);

  return newCharacterNode(context, openNode, contentNode, closeNode);
}
