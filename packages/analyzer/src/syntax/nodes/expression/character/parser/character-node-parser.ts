import {
  $LexicalNode,
  AnalyzerContext,
  CHARACTER_CLOSE,
  CHARACTER_OPEN,
  CharacterNode,
  newCharacterNode,
} from '#analyzer';
import {newText, nothing, Nothing} from '#core';

export function parseCharacterNode(context: AnalyzerContext): CharacterNode | Nothing {
  const open = context.source.takeCharacter($LexicalNode(), CHARACTER_OPEN);

  if (!open) {
    return nothing;
  }

  const content = context.source.takeWhile($LexicalNode(), (x) => !x.equals(CHARACTER_CLOSE));
  const close = context.source.takeCharacter($LexicalNode(), CHARACTER_CLOSE);

  if (!content || content.text.count() > 1) {
    context.addError(open.range, newText(`Only character expect`));
  }

  if (!close) {
    context.addError(open.range, newText(`Close token expect`));
  }

  return newCharacterNode(open, content, close);
}
