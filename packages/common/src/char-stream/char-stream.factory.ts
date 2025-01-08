import {$CharStream, Boolean2, Char, CharStream, Integer, newTextPosition, Text} from '#common';

export function charStreamFromText(text: Text): CharStream {
  return {
    $: $CharStream,
    position: newTextPosition(),

    take(count: Integer = 1): Text {
      return text.slice(this.position.index, this.position.index + count);
    },

    takeWhile(predicate: (char: Char) => Boolean2): Text {
      return text.takeWhile(predicate);
    },
  };
}
