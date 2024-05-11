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
  return {
    index: position.index,
    line: position.line,
    column: position.column,
  };
}

export function zeroPosition(): TextPosition {
  return {
    index: 0,
    line: 0,
    column: 0,
  };
}
