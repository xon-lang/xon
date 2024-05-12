import {Array2} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {TextPosition, clonePosition, zeroPosition} from './text-position';

export interface TextRange {
  start: TextPosition;
  stop: TextPosition;
}

export function textRange(start: TextPosition, stop: TextPosition): TextRange {
  return {
    start,
    stop,
  };
}

export function cloneRange(range: TextRange): TextRange {
  return {
    start: clonePosition(range.start),
    stop: clonePosition(range.stop),
  };
}

export function rangeFromNodes(nodes: Array2<Node>): TextRange {
  const startNode = nodes.first();
  const stopNode = nodes.last();

  if (!startNode || !stopNode) {
    return zeroRange();
  }

  return {
    start: clonePosition(startNode.range.start),
    stop: clonePosition(stopNode.range.stop),
  };
}

export function rangeFromPosition(position: TextPosition): TextRange {
  return {
    start: clonePosition(position),
    stop: clonePosition(position),
  };
}

export function zeroRange(): TextRange {
  return {
    start: zeroPosition(),
    stop: zeroPosition(),
  };
}
