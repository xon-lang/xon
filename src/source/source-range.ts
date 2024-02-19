import { Nothing } from '../lib/core';
import { Node } from '../syntax/node/node';
import { SourcePosition, clonePosition, zeroPosition } from './source-position';

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

export function rangeFromNodes(startNode: Node | Nothing, stopNode: Node | Nothing): SourceRange {
  const start = startNode ? clonePosition(startNode.range.start) : zeroPosition();
  const stop = startNode ?? stopNode ? clonePosition((stopNode ?? startNode)!.range.stop) : zeroPosition();

  return {
    start,
    stop,
  };
}

export function zeroRange(): SourceRange {
  return {
    start: zeroPosition(),
    stop: zeroPosition(),
  };
}
