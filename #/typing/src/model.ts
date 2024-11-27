import type {Boolean2, String2} from '#/common';
import type {$} from '#/typing';

export interface $Model {
  $: $;

  // todo make non nullable
  // hash?(): Integer;
  equals?(other: this): Boolean2;
  clone?(): this;
  toString(): String2;
}
