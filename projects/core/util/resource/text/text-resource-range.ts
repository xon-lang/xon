import {Array2, Boolean2} from '../../../lib/core';
import {Node} from '../../../parser/node/node';
import {TextResourcePosition, clonePosition, zeroPosition} from './text-resource-position';

export interface TextResourceRange {
  start: TextResourcePosition;
  stop: TextResourcePosition;

  eq(other: TextResourceRange): Boolean2;
}

export function textResourceRange(start: TextResourcePosition, stop: TextResourcePosition): TextResourceRange {
  return {
    start: clonePosition(start),
    stop: clonePosition(stop),

    eq(other: TextResourceRange): Boolean2 {
      return this.start.eq(other.start) && this.stop.eq(other.stop);
    },
  };
}

export function cloneRange(range: TextResourceRange): TextResourceRange {
  return textResourceRange(range.start, range.stop);
}

export function rangeFromNodes(nodes: Array2<Node>): TextResourceRange {
  const startNode = nodes.first();
  const stopNode = nodes.last();

  if (!startNode) {
    return zeroRange();
  }

  const start = clonePosition(startNode.range.start);
  const stop = clonePosition(stopNode!.range.stop);

  return textResourceRange(start, stop);
}

export function rangeFromPosition(position: TextResourcePosition): TextResourceRange {
  return textResourceRange(clonePosition(position), clonePosition(position));
}

export function zeroRange(): TextResourceRange {
  return textResourceRange(zeroPosition(), zeroPosition());
}
