import {$, is2} from '../../../$';
import {Array2, Boolean2} from '../../../../lib/types';
import {Node} from '../../../analyzer/node';
import {TextPosition, clonePosition, zeroPosition} from './text-position';

export interface TextRange {
  $: $.TextRange;
  start: TextPosition;
  stop: TextPosition;

  contains(position: TextPosition): Boolean2;
  contains(range: TextRange): Boolean2;
  contains(positionOrRange: TextPosition | TextRange): Boolean2;
}

export function textRange(start: TextPosition, stop: TextPosition): TextRange {
  return {
    $: $.TextRange,
    start,
    stop,

    contains(positionOrRange: TextPosition | TextRange): Boolean2 {
      if (is2<TextPosition>(positionOrRange, $.TextPosition)) {
        return this.start.index >= positionOrRange.index && this.stop.index <= positionOrRange.index;
      }

      return this.start.index >= positionOrRange.start.index && this.stop.index <= positionOrRange.stop.index;
    },
  };
}

export function cloneRange(range: TextRange): TextRange {
  return textRange(clonePosition(range.start), clonePosition(range.stop));
}

export function rangeFromNodes(nodes: Array2<Node>): TextRange {
  const startNode = nodes.first();
  const stopNode = nodes.last();

  if (!startNode || !stopNode) {
    return zeroRange();
  }

  return textRange(clonePosition(startNode.range.start), clonePosition(stopNode.range.stop));
}

export function rangeFromPosition(position: TextPosition): TextRange {
  return textRange(clonePosition(position), clonePosition(position));
}

export function zeroRange(): TextRange {
  return textRange(zeroPosition(), zeroPosition());
}
