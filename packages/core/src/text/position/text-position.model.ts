import {$CoreType, Boolean2, Integer} from '#core';
import {Model} from '#typing';

export type TextPosition = Model & {
  index: Integer;
  line: Integer;
  column: Integer;

  update(position: TextPosition): void;
  update(index: Integer, line: Integer, column: Integer): void;
  clone(): TextPosition;
  equals(other: TextPosition): Boolean2;
};

export const $TextPosition = () => $CoreType<TextPosition>('TextPosition');
