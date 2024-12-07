import {Boolean2, commonPackageType, Model_V2, TextPosition} from '#common';

export type TextRange = Model_V2 & {
  start: TextPosition;
  stop: TextPosition;

  clone(): TextRange;
  equals(other: TextRange): Boolean2;
  contains(position: TextPosition): Boolean2;
  contains(range: TextRange): Boolean2;
  contains(positionOrRange: TextPosition | TextRange): Boolean2;
  union(range: TextRange): TextRange;
};

export const $TextRange = commonPackageType<TextRange>('TextRange');
