import {$CharacterStream, CharacterStream, LexicalNode, newLexicalNode, NL, UNDERSCORE} from '#analyzer';
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
} from '#core';

export function newCharacterStreamFromText(source: Text): CharacterStream {
  let sourcePosition = newTextPosition();
  const sourceLength = source.count();
  let lastWordToken: LexicalNode | Nothing = nothing;

  return {
    $: $CharacterStream(),

    takeWhile(
      predicate: (character: Character, index: Integer, chunk: Text) => Boolean2,
    ): LexicalNode | Nothing {
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

      return newLexicalNode(range, text);
    },

    takeText(text: Text): LexicalNode | Nothing {
      const length = text.count();

      return this.takeWhile((x, i) => i < length && text.at2(i).equals(x));
    },

    takeCharacter(character: Character): LexicalNode | Nothing {
      return this.takeWhile((x, i) => i === 0 && character.equals(x));
    },

    takeWord(exactWord?: Text): LexicalNode | Nothing {
      const token =
        lastWordToken ??
        this.takeWhile(
          (x, i) => (i === 0 && x.isLetter()) || (i > 0 && x.isLetterOrDigit()) || x.equals(UNDERSCORE),
        );

      if ((!exactWord && token) || (exactWord && token?.text.equals(exactWord))) {
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
