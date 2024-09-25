import {Boolean2, Integer} from '#common';
import {$, $Model} from '#typing';

export type TextPosition = $Model & {
  $: $.TextPosition;
  index: Integer;
  line: Integer;
  column: Integer;

  equals(other: TextPosition): Boolean2;
};
