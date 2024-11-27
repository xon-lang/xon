import {Anything, Nothing, TextData} from '#/common';
import {$Model} from '#/typing';

export type Resource<T = Anything> = $Model & {
  location: TextData | Nothing;
  data: T;
};
