import {Boolean2, Integer} from '../lib/core';

export interface SourcePosition {
  index: Integer;
  line: Integer;
  column: Integer;

  eq(position: SourcePosition): Boolean2;
}

export function sourcePosition(index: Integer, line: Integer, column: Integer): SourcePosition {
  return {
    index,
    line,
    column,

    eq(position: SourcePosition): Boolean2 {
      return this.index === position.index;
    },
  };
}

export function clonePosition(position: SourcePosition): SourcePosition {
  return sourcePosition(position.index, position.line, position.column);
}

export function zeroPosition(): SourcePosition {
  return sourcePosition(0, 0, 0);
}
