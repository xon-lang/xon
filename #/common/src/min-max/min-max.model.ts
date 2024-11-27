import {Boolean2, Integer} from '#common';
import {$Model} from '#typing';

// todo is MinMax a vector ???
export type MinMax = $Model & {
  min: Integer;
  max: Integer;

  // todo remove clone and equals use from $Model
  clone(): MinMax;
  equals(other: MinMax): Boolean2;
};
