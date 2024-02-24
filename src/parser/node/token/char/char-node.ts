import { String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { CHAR_QUOTE } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode } from '../token-node';

export interface CharNode extends TokenNode {
  $: $Node.CHAR;
}

export function charNode(range: SourceRange, text: String2): CharNode {
  return {
    $: $Node.CHAR,
    range,
    text,
  };
}

export function scanCharNode(context: SyntaxContext): CharNode | null {
  if (context.source.text[context.position.index] === CHAR_QUOTE) {
    const nextQuoteIndex = context.source.text.indexOf(CHAR_QUOTE, context.position.index + 1);

    const endSlice = nextQuoteIndex < 0 ? context.source.text.length : nextQuoteIndex + 1;
    const text = context.source.text.slice(context.position.index, endSlice);
    const range = context.getRange(text.length);

    return charNode(range, text);
  }

  return null;
}
