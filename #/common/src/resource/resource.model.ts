import {$Model, Anything_V2, commonPackageType, Model, Nothing, TextData} from '#common';

export type Resource<T = Anything_V2> = Model & {
  location: TextData | Nothing;
  data: T;
};

export const $Resource = <T extends Anything_V2>($T = $Model) =>
  commonPackageType<Resource<T>>('Resource', null, [$T]);
