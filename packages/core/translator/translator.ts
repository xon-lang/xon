import {$Model} from '../$';
import {String2} from '../../lib/types';

export type Translator = $Model & {
  translate(): String2;
};
