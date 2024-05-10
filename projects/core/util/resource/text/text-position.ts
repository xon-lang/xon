import {Integer} from '../../../lib/core';

export interface TextPosition {
  index: Integer;
  line: Integer;
  column: Integer;
}

export function textPosition(index: Integer, line: Integer, column: Integer): TextPosition {
  return {
    index,
    line,
    column,
  };
}

export function clonePosition(position: TextPosition): TextPosition {
  return textPosition(position.index, position.line, position.column);
}

export function zeroPosition(): TextPosition {
  return textPosition(0, 0, 0);
}
