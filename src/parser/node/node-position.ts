import { Integer } from '~/lib/core';

export interface NodePosition {
  index: Integer;
  line: Integer;
  column: Integer;
}

export function nodePosition(index: Integer, line: Integer, column: Integer): NodePosition {
  return {
    index,
    line,
    column,
  };
}

export function clonePosition(position: NodePosition): NodePosition {
  return {
    ...position,
  };
}
