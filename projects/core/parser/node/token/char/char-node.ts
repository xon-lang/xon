import {Char, Nothing, String2, nothing} from '../../../../lib/core';
import {SourceRange} from '../../../../source/source-range';
import {CHAR_QUOTE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CharNode extends TokenNode {
  $: $Node.CHAR;
  value: Char;
}

export function charNode(range: SourceRange, text: String2): CharNode {
  const lastIndex = text.length > 1 && text.last() === CHAR_QUOTE ? -1 : text.length;
  const value = text.slice(1, lastIndex);

  return tokenNode($Node.CHAR, {range, text, value});
}

export function scanCharNode(context: SyntaxContext): CharNode | Nothing {
  if (context.source.text[context.position.index] !== CHAR_QUOTE) {
    return nothing;
  }

  const nextQuoteIndex = context.source.text.indexOf(CHAR_QUOTE, context.position.index + 1);

  const endSlice = nextQuoteIndex < 0 ? context.source.text.length : nextQuoteIndex + 1;
  const text = context.source.text.slice(context.position.index, endSlice);
  const range = context.getRange(text.length, false);

  return charNode(range, text);
}
