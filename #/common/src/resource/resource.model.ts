import {Anything_V2, Nothing, TextData, commonPackageType} from '#common';
import {$Model, Model} from '#typing';

export type Resource<T = Anything_V2> = Model & {
  location: TextData | Nothing;
  data: T;
};

export const $Resource = <T extends Anything_V2>($T = $Model) =>
  commonPackageType<Resource<T>>('Resource', null, [$T]);
