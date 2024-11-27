import {String2} from '#common';
import {$Model} from '#typing';

export type Translator = $Model & {
  translate(): String2;
};
