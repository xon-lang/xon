import {
  $TextPosition,
  $TextRange,
  Boolean2,
  TextPosition,
  TextRange,
  newArrayData,
  newTextPosition,
} from '#common';
import {is} from '#typing';

// todo rename to 'newTextRange'
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

    isEmpty(): Boolean2 {
      return this.start.index === this.stop.index;
    },

    equals(other: TextRange): Boolean2 {
      return this.start.equals(other.start) && this.stop.equals(other.stop);
    },
  };
}

export function rangeFromPosition(position: TextPosition): TextRange {
  return textRange(position.clone(), position.clone());
}

// rename to newTextRange with default 0 values
export function zeroRange(): TextRange {
  return textRange(newTextPosition(), newTextPosition());
}
