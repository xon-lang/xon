import {$CharacterStream, CharacterStream, LexicalNode, NL} from '#analyzer';
import {
  Boolean2,
  Character,
  Integer,
  newTextPosition,
  newTextRange,
  nothing,
  Nothing,
  Text,
  TextPosition,
} from '#common';
import {$Type} from '#typing';

export function newCharacterStreamFromText(source: Text): CharacterStream {
  let sourcePosition = newTextPosition();
  const sourceLength = source.count();

  return {
    $: $CharacterStream(),

    takeWhile(
      $type: $Type,
      predicate: (character: Character, index: Integer, text: Text) => Boolean2 | Nothing,
      length?: Integer | Nothing,
    ): LexicalNode | Nothing {
      if (sourcePosition.index >= sourceLength) {
        return nothing;
      }

      if (length && length + sourcePosition.index > sourceLength) {
        return nothing;
      }

      const chunkText = source.slice(sourcePosition.index);

      const text = length
        ? chunkText.takeWhile((x, i) => i < length && !!predicate(x, i, chunkText))
        : chunkText.takeWhile((x, i) => !!predicate(x, i, chunkText));

      if (text.isEmpty() || (!!length && text.count() !== length)) {
        return nothing;
      }

      const range = newTextRange(sourcePosition, getStopTextPosition(text, sourcePosition));
      sourcePosition = range.stop;

      return {$: $type, text, range};
    },
  };
}

function getStopTextPosition(text: Text, startPosition: TextPosition): TextPosition {
  let line = startPosition.line;
  let column = startPosition.column;

  for (const character of text) {
    if (NL.equals(character)) {
      line += 1;
      column = 0;

      continue;
    }

    column += 1;
  }

  const index = startPosition.index + text.count();

  return newTextPosition(index, line, column);
}
