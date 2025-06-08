import {
  AnalyzerContext,
  CharacterNode,
  newCharacterNode,
  parseCharacterCloseNode,
  parseCharacterContentNode,
  parseCharacterOpenNode,
} from '#analyzer';
import {newText, nothing, Nothing} from '#common';

export function parseCharacterNode(context: AnalyzerContext): CharacterNode | Nothing {
  const openNode = parseCharacterOpenNode(context);

  if (!openNode) {
    return nothing;
  }

  const contentNode = parseCharacterContentNode(context);
  const closeNode = parseCharacterCloseNode(context);

  if (!contentNode || contentNode.text.count() > 1) {
    context.addError(openNode.range, newText(`Only character expect`));
  }

  if (!closeNode) {
    context.addError(openNode.range, newText(`Close token expect`));
  }

  return newCharacterNode(openNode, contentNode, closeNode);
}
