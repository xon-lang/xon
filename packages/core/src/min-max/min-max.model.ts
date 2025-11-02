import {$CoreType, Boolean2, Integer} from '#core';
import {Model} from '#typing';

// todo is MinMax a vector ???
export type MinMax = Model & {
  min: Integer;
  max: Integer;

  clone(): MinMax;
  equals(other: MinMax): Boolean2;
};

export const $MinMax = () => $CoreType<MinMax>('MinMax');
