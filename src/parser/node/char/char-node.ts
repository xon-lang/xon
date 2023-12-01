import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { CHAR_QUOTE } from '~/parser/util/operators';
import { SourceRange } from '~/source/source-range';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface CharNode extends TokenNode {
  $: NodeType.CHAR;
}

export function charNode(range: SourceRange, text: String2): CharNode {
  return {
    $: NodeType.CHAR,
    range,
    text,
  };
}

export function scanCharNode(context: ParserContext): CharNode | null {
  if (context.source.text[context.index] === CHAR_QUOTE) {
    const nextQuoteIndex = context.source.text.indexOf(CHAR_QUOTE, context.index + 1);

    const endSlice = nextQuoteIndex < 0 ? context.source.text.length : nextQuoteIndex + 1;
    const text = context.source.text.slice(context.index, endSlice);
    const range = context.getRange(text.length);

    return charNode(range, text);
  }

  return null;
}
