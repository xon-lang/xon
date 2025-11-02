import {$CoreType, Boolean2, Model, TextPosition} from '#core';

export type TextRange = Model & {
  start: TextPosition;
  stop: TextPosition;

  contains(position: TextPosition): Boolean2;
  contains(range: TextRange): Boolean2;
  contains(positionOrRange: TextPosition | TextRange): Boolean2;
  union(other: TextRange): TextRange;
  clone(): TextRange;
  isEmpty(): Boolean2;
  equals(other: TextRange): Boolean2;
};

export const $TextRange = () => $CoreType<TextRange>('TextRange');
