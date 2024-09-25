import {Boolean2, Resource, TextData, TextRange, TextReference} from '#common';
import {$} from '#typing';

export type TextResource = Resource<TextData> & {
  $: $.TextResource;

  equals(other: Resource<TextData>): Boolean2;
  reference(range: TextRange): TextReference;
};
