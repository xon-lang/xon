import {Nothing, nothing} from '../../../../../lib/types';
import {TextResourcePosition} from '../../../../util/resource/text/text-resource-position';
import {STRING_QUOTE} from '../../lexical-analyzer-config';
import {StringNode, stringNode} from './string-node';

export function stringNodeParse(cursor: TextResourcePosition): StringNode | Nothing {
  if (!cursor.checkTextAtPosition(STRING_QUOTE)) {
    return nothing;
  }

  const stopIndex = cursor.resource.data.indexOf(STRING_QUOTE, cursor.position.index + STRING_QUOTE.length);
  const endSlice = stopIndex < 0 ? cursor.resource.data.length : stopIndex + STRING_QUOTE.length;

  const text = cursor.resource.data.slice(cursor.position.index, endSlice);
  const range = cursor.getRangeWithNL(text.length);

  return stringNode(range, text);
}
