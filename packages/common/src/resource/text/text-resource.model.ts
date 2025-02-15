import {$CommonType, $Resource, $Text, Boolean2, Resource, Text, TextRange, TextReference} from '#common';

export type TextResource = Resource<Text> & {
  reference(range: TextRange): TextReference;
  equals(other: TextResource): Boolean2;
};

export const $TextResource = () => $CommonType<TextResource>('TextResource', $Resource($Text()));
