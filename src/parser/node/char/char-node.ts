import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { SourceRange } from '../../../source/source-range';
import { CHAR_QUOTE } from '../../parser-config';
import { coreType } from '../../type/core';
import { Type } from '../../type/type';
import { TokenNode } from '../node';
import { $Node } from '../node-type';

export interface CharNode extends TokenNode {
  $: $Node.CHAR;
  type: Type;
}

export function charNode(range: SourceRange, text: String2): CharNode {
  return {
    $: $Node.CHAR,
    type: coreType('Char', text),
    range,
    text,
  };
}

export function scanCharNode(context: ParserContext): CharNode | null {
  if (context.source.text[context.position.index] === CHAR_QUOTE) {
    const nextQuoteIndex = context.source.text.indexOf(CHAR_QUOTE, context.position.index + 1);

    const endSlice = nextQuoteIndex < 0 ? context.source.text.length : nextQuoteIndex + 1;
    const text = context.source.text.slice(context.position.index, endSlice);
    const range = context.getRange(text.length);

    return charNode(range, text);
  }

  return null;
}
