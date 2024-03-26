import {Boolean2, Integer} from '../../../lib/core';

export interface TextResourcePosition {
  index: Integer;
  line: Integer;
  column: Integer;

  eq(other: TextResourcePosition): Boolean2;
}

export function textResourcePosition(index: Integer, line: Integer, column: Integer): TextResourcePosition {
  return {
    index,
    line,
    column,

    eq(other: TextResourcePosition): Boolean2 {
      return this.index === other.index;
    },
  };
}

export function clonePosition(position: TextResourcePosition): TextResourcePosition {
  return textResourcePosition(position.index, position.line, position.column);
}

export function zeroPosition(): TextResourcePosition {
  return textResourcePosition(0, 0, 0);
}
