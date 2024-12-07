import {$Model_V2, Anything_V2, commonPackageType, Model_V2, Nothing, TextData} from '#common';

export type Resource<T = Anything_V2> = Model_V2 & {
  location: TextData | Nothing;
  data: T;
};

export const $Resource = <T extends Anything_V2>($T = $Model_V2) =>
  commonPackageType<Resource<T>>('Resource', null, [$T]);
