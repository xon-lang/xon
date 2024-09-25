import {Anything, Nothing, String2} from '#common';
import {$Model} from '#typing';

export type Resource<T = Anything> = $Model & {
  location: String2 | Nothing;
  data: T;
};
