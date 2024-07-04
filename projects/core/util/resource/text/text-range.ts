import {$Node, is2, TypeKey} from '../../../$';
import {Array2, Boolean2} from '../../../../lib/types';
import {Node} from '../../../analyzer/node';
import {clonePosition, TextPosition, zeroPosition} from './text-position';

export interface TextRange {
  $: TypeKey<TextRange>;
  start: TextPosition;
  stop: TextPosition;

  contains(position: TextPosition): Boolean2;
  contains(range: TextRange): Boolean2;
  contains(positionOrRange: TextPosition | TextRange): Boolean2;
}

export function textRange(start: TextPosition, stop: TextPosition): TextRange {
  return {
    $: $Node.TextRange,
    start,
    stop,

    contains(positionOrRange: TextPosition | TextRange): Boolean2 {
      if (is2(positionOrRange, $Node.TextPosition)) {
        return positionOrRange.index >= this.start.index && positionOrRange.index <= this.stop.index;
      }

      return positionOrRange.start.index >= this.start.index && positionOrRange.stop.index <= this.stop.index;
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
