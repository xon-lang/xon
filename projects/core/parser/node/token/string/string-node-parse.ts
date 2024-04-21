import {Nothing, nothing} from '../../../../lib/core';
import {STRING_QUOTE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {StringNode, stringNode} from './string-node';

export function stringNodeParse(context: SyntaxContext): StringNode | Nothing {
  const {resource, position} = context;

  if (resource.data[position.index] !== STRING_QUOTE) {
    return nothing;
  }

  const stopIndex = resource.data.indexOf(STRING_QUOTE, position.index + STRING_QUOTE.length);
  const endSlice = stopIndex < 0 ? resource.data.length : stopIndex + STRING_QUOTE.length;

  const text = resource.data.slice(position.index, endSlice);
  const range = context.getRange(text.length, true);

  return stringNode(range, text);
}
