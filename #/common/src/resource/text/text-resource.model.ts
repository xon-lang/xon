import {
  $Resource,
  $Text,
  Boolean2,
  Resource,
  Text,
  TextRange,
  TextReference,
  commonPackageType,
} from '#common';

export type TextResource = Resource<Text> & {
  reference(range: TextRange): TextReference;
  equals(other: TextResource): Boolean2;
};

export const $TextResource = commonPackageType<TextResource>('TextResource', $Resource($Text));
