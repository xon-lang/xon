import {NL} from '#analyzer';
import {
  $CharStream,
  Boolean2,
  Char,
  CharStream,
  Integer,
  newTextPosition,
  nothing,
  Nothing,
  Text,
  TextPosition,
} from '#common';

export function charStreamFromText(source: Text): CharStream {
  return {
    $: $CharStream,
    length: source.count(),
    position: newTextPosition(),

    takeWhile(
      predicate: (char: Char, index: Integer, text: Text) => Boolean2,
      length?: Integer | Nothing,
    ): Text | Nothing {
      if (this.position.index >= this.length) {
        return nothing;
      }

      if (length && length + this.position.index > this.length) {
        return nothing;
      }

      const chunkText = source.slice(this.position.index);

      const text = length
        ? chunkText.takeWhile((x, i) => i < length && predicate(x, i, chunkText))
        : chunkText.takeWhile((x, i) => predicate(x, i, chunkText));

      if (text.isEmpty() || (!!length && text.count() !== length)) {
        return nothing;
      }

      this.position = getStopTextPosition(text, this.position);

      return text;
    },
  };
}

function getStopTextPosition(text: Text, startPosition: TextPosition): TextPosition {
  let line = startPosition.line;
  let column = startPosition.column;

  for (const char of text) {
    if (NL.equals(char)) {
      line += 1;
      column = 0;

      continue;
    }

    column += 1;
  }

  const index = startPosition.index + text.count();

  return newTextPosition(index, line, column);
}
