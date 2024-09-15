import {String2} from '#common';
import {$Model} from '#core';

export type Translator = $Model & {
  translate(): String2;
};
