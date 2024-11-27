import {Boolean2, Resource, TextData, TextRange, TextReference} from '#/common';
import {$} from '#/typing';

export type TextResource = Resource<TextData> & {
  $: $.TextResource;

  reference(range: TextRange): TextReference;
  // todo remove 'equals'
  equals(other: Resource<TextData>): Boolean2;
  // todo remove 'clone'
  clone(): TextResource;
};
