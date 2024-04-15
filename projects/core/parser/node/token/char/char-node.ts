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
  const {resource, position} = context;

  if (resource.data[position.index] !== CHAR_QUOTE) {
    return nothing;
  }

  const nextQuoteIndex = resource.data.indexOf(CHAR_QUOTE, position.index + 1);

  const endSlice = nextQuoteIndex < 0 ? resource.data.length : nextQuoteIndex + 1;
  const text = resource.data.slice(position.index, endSlice);
  const range = context.getRange(text.length, false);

  return charNode(range, text);
}
