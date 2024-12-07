import {Boolean2, commonPackageType, Integer, Model_V2} from '#common';

// todo is MinMax a vector ???
export type MinMax = Model_V2 & {
  min: Integer;
  max: Integer;

  clone(): MinMax;
  equals(other: MinMax): Boolean2;
};

export const $MinMax = commonPackageType<MinMax>('MinMax');
