import {$Resource, $Text, Resource, Text, TextRange, TextReference, commonPackageType} from '#common';

export type TextResource = Resource<Text> & {
  reference(range: TextRange): TextReference;
};

export const $TextResource = commonPackageType<TextResource>('TextResource', $Resource($Text));
