import {
  $Resource,
  $TextData,
  Boolean2,
  commonPackageType,
  Resource,
  TextData,
  TextRange,
  TextReference,
} from '#common';

export type TextResource = Resource<TextData> & {
  reference(range: TextRange): TextReference;
  // todo remove 'equals'
  equals(other: Resource<TextData>): Boolean2;
  // todo remove 'clone'
  clone(): TextResource;
};

export const $TextResource = commonPackageType<TextResource>('TextResource', $Resource($TextData));
