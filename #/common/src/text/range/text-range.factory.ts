import {
  $TextPosition,
  $TextRange,
  Boolean2,
  TextPosition,
  TextRange,
  clonePosition,
  is_v2,
  zeroPosition,
} from '#common';
import {Node} from '#core';

export function textRange(start: TextPosition, stop: TextPosition): TextRange {
  return {
    $: $TextRange,
    start,
    stop,

    clone(): TextRange {
      return textRange(clonePosition(this.start), clonePosition(this.stop));
    },

    equals(other: TextRange): Boolean2 {
      return this.start.equals(other.start) && this.stop.equals(other.stop);
    },

    contains(positionOrRange: TextPosition | TextRange): Boolean2 {
      if (is_v2(positionOrRange, $TextPosition)) {
        return positionOrRange.index >= this.start.index && positionOrRange.index <= this.stop.index;
      }

      return positionOrRange.start.index >= this.start.index && positionOrRange.stop.index <= this.stop.index;
    },

    union(range: TextRange): TextRange {
      const {min, max} = [this.start, this.stop].minMax((x) => x.index)!; // todo how to fix '!' ???

      return textRange(min, max);
    },
  };
}

export function rangeFromNodes(nodes: Node[]): TextRange {
  const startNode = nodes.first();
  const stopNode = nodes.last();

  if (!startNode || !stopNode) {
    return zeroRange();
  }

  return textRange(
    clonePosition(startNode.reference.range.start),
    clonePosition(stopNode.reference.range.stop),
  );
}

export function rangeFromPosition(position: TextPosition): TextRange {
  return textRange(clonePosition(position), clonePosition(position));
}

export function zeroRange(): TextRange {
  return textRange(zeroPosition(), zeroPosition());
}
