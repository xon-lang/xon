import {Boolean2, commonPackageType, TextPosition} from '#common';
import {Model} from '#typing';

export type TextRange = Model & {
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
