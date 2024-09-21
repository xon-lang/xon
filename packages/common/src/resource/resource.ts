import {Nothing, Something, String2} from '#common';
import {$Model} from '#typing';

export type Resource = $Model & {
  location: String2 | Nothing;
  data: Something;
};
