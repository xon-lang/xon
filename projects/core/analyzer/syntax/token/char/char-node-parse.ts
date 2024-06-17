import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {CHAR_QUOTE} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {CharNode, charNode} from './char-node';

export function charNodeParse(context: SyntaxContext, index: Integer): CharNode | Nothing {
  if (context.resource.data[context.position.index] !== CHAR_QUOTE) {
    return nothing;
  }

  const nextQuoteIndex = context.resource.data.indexOf(CHAR_QUOTE, context.position.index + 1);

  const endSlice = nextQuoteIndex < 0 ? context.resource.data.length : nextQuoteIndex + 1;
  const text = context.resource.data.slice(context.position.index, endSlice);
  const range = context.getRangeWithNL(text.length);

  return charNode(range, text);
}
