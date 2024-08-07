import {String2} from '../../lib/types';
import {TextRange} from '../util/resource/text/text-range';

export type FormatterItem = {
  range: TextRange;
  text: String2;
};
