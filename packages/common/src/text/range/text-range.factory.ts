import {
  $TextPosition,
  $TextRange,
  Boolean2,
  TextPosition,
  TextRange,
  newArrayData,
  newTextPosition,
} from '#common';
import {Node} from '#core';
import {is} from '#typing';

export function textRange(start: TextPosition, stop: TextPosition): TextRange {
  return {
    $: $TextRange,
    start,
    stop,

    contains(positionOrRange: TextPosition | TextRange): Boolean2 {
      if (is(positionOrRange, $TextPosition)) {
        return positionOrRange.index >= this.start.index && positionOrRange.index <= this.stop.index;
      }

      return positionOrRange.start.index >= this.start.index && positionOrRange.stop.index <= this.stop.index;
    },

    union(other: TextRange): TextRange {
      const {min, max} = newArrayData([this.start, other.stop]).minMax((x) => x.index);

      return textRange(min?.element!, max?.element!);
    },

    clone(): TextRange {
      return textRange(this.start.clone(), this.stop.clone());
    },

    equals(other: TextRange): Boolean2 {
      return this.start.equals(other.start) && this.stop.equals(other.stop);
    },
  };
}

export function rangeFromNodes(nodes: Node[]): TextRange {
  const {first, last} = newArrayData(nodes).firstLast()!;

  if (!first || !last) {
    return zeroRange();
  }

  return textRange(first.reference.range.start.clone(), last.reference.range.stop.clone());
}

export function rangeFromPosition(position: TextPosition): TextRange {
  return textRange(position.clone(), position.clone());
}

export function zeroRange(): TextRange {
  return textRange(newTextPosition(), newTextPosition());
}
