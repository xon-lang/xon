import {$Model} from '../$';
import {String2} from '../../../lib/src/types';

export type Translator = $Model & {
  translate(): String2;
};
