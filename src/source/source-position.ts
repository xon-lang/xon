import { Integer } from '../lib/core';

export interface SourcePosition {
  index: Integer;
  line: Integer;
  column: Integer;
}

export function sourcePosition(index: Integer, line: Integer, column: Integer): SourcePosition {
  return {
    index,
    line,
    column,
  };
}

export function clonePosition(position: SourcePosition): SourcePosition {
  return {
    ...position,
  };
}

export function zeroPosition(): SourcePosition {
  return {
    index: 0,
    line: 0,
    column: 0,
  };
}
