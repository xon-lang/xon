import {$, $Model} from '../../../$';
import {Boolean2, Integer} from '../../../../lib/types';

export type TextPosition = $Model & {
  $: $.TextPosition;
  index: Integer;
  line: Integer;
  column: Integer;

  equals(other: TextPosition): Boolean2;
};

export function textPosition(index: Integer, line: Integer, column: Integer): TextPosition {
  return {
    $: $.TextPosition,
    index,
    line,
    column,

    equals(other: TextPosition): Boolean2 {
      return this.index === other.index && this.line === other.line && this.column === other.column;
    },
  };
}

export function clonePosition(position: TextPosition): TextPosition {
  return textPosition(position.index, position.line, position.column);
}

export function zeroPosition(): TextPosition {
  return textPosition(0, 0, 0);
}
