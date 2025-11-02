import {$CoreType, Boolean2, Integer, Model} from '#core';

// todo is MinMax a vector ???
export type MinMax = Model & {
  min: Integer;
  max: Integer;

  clone(): MinMax;
  equals(other: MinMax): Boolean2;
};

export const $MinMax = () => $CoreType<MinMax>('MinMax');
