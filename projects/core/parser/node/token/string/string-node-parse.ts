import {Integer, Nothing, nothing} from '../../../../lib/core';
import {STRING_QUOTE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {StringNode, stringNode} from './string-node';

export function stringNodeParse(context: SyntaxContext, index: Integer): StringNode | Nothing {
  if (context.resource.data[index] !== STRING_QUOTE) {
    return nothing;
  }

  const stopIndex = context.resource.data.indexOf(STRING_QUOTE, index + STRING_QUOTE.length);
  const endSlice = stopIndex < 0 ? context.resource.data.length : stopIndex + STRING_QUOTE.length;

  const text = context.resource.data.slice(index, endSlice);
  const range = context.getRangeWithNL(text.length);

  return stringNode(range, text);
}
