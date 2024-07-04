import {$, $Model} from '../../../$';
import {Integer} from '../../../../lib/types';

export type TextPosition = $Model<$.TextPosition> & {
  index: Integer;
  line: Integer;
  column: Integer;
};

export function textPosition(index: Integer, line: Integer, column: Integer): TextPosition {
  return {
    $: $.TextPosition,
    index,
    line,
    column,
  };
}

export function clonePosition(position: TextPosition): TextPosition {
  return textPosition(position.index, position.line, position.column);
}

export function zeroPosition(): TextPosition {
  return textPosition(0, 0, 0);
}
