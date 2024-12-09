import {$Resource, $TextData, Resource, TextData, TextRange, TextReference, commonPackageType} from '#common';

export type TextResource = Resource<TextData> & {
  reference(range: TextRange): TextReference;
};

export const $TextResource = commonPackageType<TextResource>('TextResource', $Resource($TextData));
