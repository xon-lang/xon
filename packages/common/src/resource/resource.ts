import {Nothing, Something, String2} from '#common';
import {$Model} from '#typing';

export type Resource<T = Something> = $Model & {
  location: String2 | Nothing;
  data: T;
};
