import {Boolean2, commonPackageType, Integer} from '#common';
import {Model} from '#typing';

// todo is MinMax a vector ???
export type MinMax = Model & {
  min: Integer;
  max: Integer;

  clone(): MinMax;
  equals(other: MinMax): Boolean2;
};

export const $MinMax = commonPackageType<MinMax>('MinMax');
