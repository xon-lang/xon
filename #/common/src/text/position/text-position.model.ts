import {Boolean2, commonPackageType, Integer, Model_V2} from '#common';

export type TextPosition = Model_V2 & {
  index: Integer;
  line: Integer;
  column: Integer;

  equals(other: TextPosition): Boolean2;
};

export const $TextPosition = commonPackageType<TextPosition>('TextPosition');
