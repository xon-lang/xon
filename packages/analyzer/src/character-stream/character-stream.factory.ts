import {$CharacterStream, CharacterStream, LexicalNode, newLexicalNode, NL, UNDERSCORE} from '#analyzer';
import {
  $Type,
  Boolean2,
  Character,
  Integer,
  newTextPosition,
  newTextRange,
  nothing,
  Nothing,
  Text,
  TextPosition,
} from '#core';

export function newCharacterStreamFromText(source: Text): CharacterStream {
  let sourcePosition = newTextPosition();
  const sourceLength = source.count();
  let lastWordToken: LexicalNode | Nothing = nothing;

  return {
    $: $CharacterStream(),

    takeWhile<T extends $Type>(
      $type: $Type,
      predicate: (character: Character, index: Integer, chunk: Text) => Boolean2,
    ): (T['type'] & LexicalNode) | Nothing {
      if (lastWordToken || sourcePosition.index >= sourceLength) {
        return nothing;
      }

      const chunk = source.slice(sourcePosition.index);
      const text = chunk.takeWhile((x, i) => predicate(x, i, chunk));

      if (text.isEmpty()) {
        return nothing;
      }

      const range = newTextRange(sourcePosition, getStopTextPosition(text, sourcePosition));
      sourcePosition = range.stop;

      return newLexicalNode($type, range, text);
    },

    takeText<T extends $Type>($type: $Type, text: Text): (T['type'] & LexicalNode) | Nothing {
      const length = text.count();

      return this.takeWhile($type, (x, i) => i < length && text.at2(i).equals(x));
    },

    takeCharacter<T extends $Type>($type: $Type, character: Character): (T['type'] & LexicalNode) | Nothing {
      return this.takeWhile($type, (x, i) => i === 0 && character.equals(x));
    },

    takeWord<T extends $Type>($type: T, word?: Text): (T['type'] & LexicalNode) | Nothing {
      const token =
        lastWordToken ??
        this.takeWhile(
          $type,
          (x, i) => (i === 0 && x.isLetter()) || (i > 0 && x.isLetterOrDigit()) || x.equals(UNDERSCORE),
        );

      if ((!word && token) || (word && token?.text.equals(word))) {
        lastWordToken = nothing;
        return token;
      }

      lastWordToken = token;
      return nothing;
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
