import {$Resource, $TextData, commonPackageType, Resource, TextData, TextRange, TextReference} from '#common';

export type TextResource = Resource<TextData> & {
  reference(range: TextRange): TextReference;
};

export const $TextResource = commonPackageType<TextResource>('TextResource', $Resource($TextData));
