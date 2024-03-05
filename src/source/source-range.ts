import {Node} from '../parser/node/node';
import {SourcePosition, clonePosition, zeroPosition} from './source-position';

export interface SourceRange {
  start: SourcePosition;
  stop: SourcePosition;
}

export function sourceRange(start: SourcePosition, stop: SourcePosition): SourceRange {
  return {
    start: clonePosition(start),
    stop: clonePosition(stop),
  };
}

export function rangeFromNodes(nodes: Node[]): SourceRange {
  const startNode = nodes.firstOrNull();
  const stopNode = nodes.lastOrNull();

  if (!startNode) {
    return zeroRange();
  }

  const start = clonePosition(startNode.range.start);
  const stop = clonePosition(stopNode!.range.stop);

  return {
    start,
    stop,
  };
}

export function rangeFromPosition(position: SourcePosition): SourceRange {
  return {
    start: clonePosition(position),
    stop: clonePosition(position),
  };
}

export function zeroRange(): SourceRange {
  return {
    start: zeroPosition(),
    stop: zeroPosition(),
  };
}
