import {Boolean2, commonPackageType, Integer, Model} from '#common';

export type TextPosition = Model & {
  index: Integer;
  line: Integer;
  column: Integer;

  equals(other: TextPosition): Boolean2;
};

export const $TextPosition = commonPackageType<TextPosition>('TextPosition');
