import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';

// todo use it for node
export interface TextRange {
  start: TextPosition;
  stop: TextPosition;
}

export function textRange(start: TextPosition, stop: TextPosition): TextRange {
  return {
    start: clonePosition(start),
    stop: clonePosition(stop),
  };
}

export function textRangeFromNodes(startNode: Node, stopNode: Node): TextRange {
  return {
    start: clonePosition(startNode.range.start),
    stop: clonePosition(stopNode.range.stop),
  };
}

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
    ...position,
  };
}

export function zeroPosition(): TextPosition {
  return {
    index: 0,
    line: 0,
    column: 0,
  };
}

export function zeroRange(): TextRange {
  return {
    start: zeroPosition(),
    stop: zeroPosition(),
  };
}
