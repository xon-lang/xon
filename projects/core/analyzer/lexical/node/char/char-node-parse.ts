import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {CHAR_QUOTE} from '../../lexical-config';
import {CharNode, charNode} from './char-node';

export function charNodeParse(cursor: TextResourcePosition): CharNode | Nothing {
  if (cursor.resource.data[cursor.position.index] !== CHAR_QUOTE) {
    return nothing;
  }

  const nextQuoteIndex = cursor.resource.data.indexOf(CHAR_QUOTE, cursor.position.index + 1);

  const endSlice = nextQuoteIndex < 0 ? cursor.resource.data.length : nextQuoteIndex + 1;
  const text = cursor.resource.data.slice(cursor.position.index, endSlice);
  const range = cursor.getRangeWithNL(text.length);

  return charNode(range, text);
}
