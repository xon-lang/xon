import {Array2} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {TextPosition, clonePosition, zeroPosition} from './text-position';

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

export function cloneRange(range: TextRange): TextRange {
  return textRange(range.start, range.stop);
}

export function rangeFromNodes(nodes: Array2<Node>): TextRange {
  const startNode = nodes.first();
  const stopNode = nodes.last();

  if (!startNode) {
    return zeroRange();
  }

  const start = clonePosition(startNode.range.start);
  const stop = clonePosition(stopNode!.range.stop);

  return textRange(start, stop);
}

export function rangeFromPosition(position: TextPosition): TextRange {
  return textRange(clonePosition(position), clonePosition(position));
}

export function zeroRange(): TextRange {
  return textRange(zeroPosition(), zeroPosition());
}
