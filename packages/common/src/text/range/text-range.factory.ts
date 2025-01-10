import {
  $TextPosition,
  $TextRange,
  Boolean2,
  Nothing,
  TextPosition,
  TextRange,
  newArrayData,
  newTextPosition,
} from '#common';
import {is} from '#typing';

export function newTextRange(start?: TextPosition | Nothing, stop?: TextPosition | Nothing): TextRange {
  start ??= newTextPosition();
  stop ??= newTextPosition();

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

      return newTextRange(min?.element!, max?.element!);
    },

    clone(): TextRange {
      return newTextRange(this.start.clone(), this.stop.clone());
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
  return newTextRange(position.clone(), position.clone());
}
