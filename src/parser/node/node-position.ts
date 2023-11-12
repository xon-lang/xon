import { Integer } from '~/lib/core';

export interface NodePosition {
  index: Integer;
  row: Integer;
  column: Integer;
}

export function nodePosition(index: Integer, row: Integer, column: Integer): NodePosition {
  return {
    index,
    row,
    column,
  };
}

export function clonePosition(position: NodePosition): NodePosition {
  return {
    ...position,
  };
}
