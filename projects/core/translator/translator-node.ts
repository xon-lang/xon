import {$Model} from '../$';
import {String2} from '../../lib/types';

export type TranslatorNode = $Model & {
  translate(): String2;
};
