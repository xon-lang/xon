import {$CommonType, Nothing, Text} from '#common';
import {$Model, Model} from '#typing';

export type Resource<T> = Model & {
  location: Text | Nothing;
  data: T;
};

export const $Resource = <T>($T = $Model()) => $CommonType<Resource<T>>('Resource', undefined, [$T]);
