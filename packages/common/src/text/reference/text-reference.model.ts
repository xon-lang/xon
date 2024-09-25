import {Boolean2, TextData, TextRange, TextResource} from '#common';
import {$} from '#typing';

export type TextReference = {
  $: $.TextResourceRange;
  resource: TextResource;
  range: TextRange;

  equals(reference: TextReference): Boolean2;
  text(): TextData;
};
