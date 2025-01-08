import {$CharStream, Boolean2, Char, CharStream, Integer, newTextPosition, Text} from '#common';

export function charStreamFromText(text: Text): CharStream {
  return {
    $: $CharStream,
    position: newTextPosition(),

    take(length: Integer = 1): Text {
      return text.take(length, this.position.index);
    },

    takeWhile(predicate: (char: Char) => Boolean2): Text {
      return text.takeWhile(predicate, this.position.index);
    },

    isFinished(): Boolean2 {
      return this.position.index >= text.count();
    },
  };
}
