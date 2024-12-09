import {$TextPosition, Boolean2, Integer, TextPosition} from '#common';

export function newTextPosition(index: Integer = 0, line: Integer = 0, column: Integer = 0): TextPosition {
  return {
    $: $TextPosition,
    index,
    line,
    column,

    clone(): TextPosition {
      return newTextPosition(this.index, this.line, this.column);
    },

    equals(other: TextPosition): Boolean2 {
      return this.index === other.index && this.line === other.line && this.column === other.column;
    },
  };
}
