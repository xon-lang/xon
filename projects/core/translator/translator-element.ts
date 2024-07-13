import {$Model} from '../$';
import {String2} from '../../lib/types';

export type TranslatorElement = $Model & {
  translate(): String2;
};
