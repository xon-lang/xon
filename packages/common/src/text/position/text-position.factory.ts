import {$TextPosition, Boolean2, Integer, TextPosition} from '#common';
import {is} from '#typing';

export function newTextPosition(index: Integer = 0, line: Integer = 0, column: Integer = 0): TextPosition {
  return {
    $: $TextPosition,
    index,
    line,
    column,

    update(indexOrPosition: Integer | TextPosition, line?: Integer, column?: Integer): void {
      if (is(indexOrPosition, $TextPosition)) {
        this.index = indexOrPosition.index;
        this.line = indexOrPosition.line;
        this.column = indexOrPosition.column;

        return;
      }

      this.index = index;
      this.line = line!;
      this.column = column!;
    },

    clone(): TextPosition {
      return newTextPosition(this.index, this.line, this.column);
    },

    equals(other: TextPosition): Boolean2 {
      return this.index === other.index && this.line === other.line && this.column === other.column;
    },
  };
}
