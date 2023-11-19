import { Node } from '~/parser/node/node';
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

export function rangeFromNodes(startNode: Node, stopNode: Node): SourceRange {
  return {
    start: clonePosition(startNode.range.start),
    stop: clonePosition(stopNode.range.stop),
  };
}

export function zeroRange(): SourceRange {
  return {
    start: zeroPosition(),
    stop: zeroPosition(),
  };
}
