import {$CommonType, Anything_V2, Nothing, Text} from '#common';
import {$Model, Model} from '#typing';

export type Resource<T = Anything_V2> = Model & {
  location: Text | Nothing;
  data: T;
};

export const $Resource = <T extends Anything_V2>($T = $Model()) =>
  $CommonType<Resource<T>>('Resource', undefined, [$T]);
