import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {STRING_QUOTE} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {StringNode, stringNode} from './string-node';

export function stringNodeParse(context: SyntaxContext, index: Integer): StringNode | Nothing {
  if (!context.checkLexemeAtIndex(STRING_QUOTE, index)) {
    return nothing;
  }

  const stopIndex = context.resource.data.indexOf(STRING_QUOTE, index + STRING_QUOTE.length);
  const endSlice = stopIndex < 0 ? context.resource.data.length : stopIndex + STRING_QUOTE.length;

  const text = context.resource.data.slice(index, endSlice);
  const range = context.getRangeWithNL(text.length);

  return stringNode(range, text);
}
