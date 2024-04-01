import {Char, Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {CHAR_QUOTE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CharNode extends TokenNode {
  $: $Node.CHAR;
  value: Char;
}

export function charNode(range: TextResourceRange, text: String2): CharNode {
  const lastIndex = text.length > 1 && text.last() === CHAR_QUOTE ? -1 : text.length;
  const value = text.slice(1, lastIndex);

  return tokenNode($Node.CHAR, {range, text, value});
}

export function charTokenParse(context: SyntaxContext): CharNode | Nothing {
  if (context.resource.data[context.position.index] !== CHAR_QUOTE) {
    return nothing;
  }

  const nextQuoteIndex = context.resource.data.indexOf(CHAR_QUOTE, context.position.index + 1);

  const endSlice = nextQuoteIndex < 0 ? context.resource.data.length : nextQuoteIndex + 1;
  const text = context.resource.data.slice(context.position.index, endSlice);
  const range = context.getRange(text.length, false);

  return charNode(range, text);
}
