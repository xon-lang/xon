import {Boolean2} from '../lib/core';
import {Node} from '../parser/node/node';
import {SourcePosition, clonePosition, zeroPosition} from './source-position';

export interface SourceRange {
  start: SourcePosition;
  stop: SourcePosition;

  eq(range: SourceRange): Boolean2;
}

export function sourceRange(start: SourcePosition, stop: SourcePosition): SourceRange {
  return {
    start: clonePosition(start),
    stop: clonePosition(stop),

    eq(range: SourceRange): Boolean2 {
      return this.start.eq(range.start) && this.stop.eq(range.stop);
    },
  };
}

export function cloneRange(range: SourceRange): SourceRange {
  return sourceRange(range.start, range.stop);
}

export function rangeFromNodes(nodes: Node[]): SourceRange {
  const startNode = nodes.first();
  const stopNode = nodes.last();

  if (!startNode) {
    return zeroRange();
  }

  const start = clonePosition(startNode.range.start);
  const stop = clonePosition(stopNode!.range.stop);

  return sourceRange(start, stop);
}

export function rangeFromPosition(position: SourcePosition): SourceRange {
  return sourceRange(clonePosition(position), clonePosition(position));
}

export function zeroRange(): SourceRange {
  return sourceRange(zeroPosition(), zeroPosition());
}
