import { String2 } from '../../../lib/core';
import { ParserContext } from '../../../parser/parser-context';
import { STRING_QUOTE } from '../../../parser/util/operators';
import { SourceRange } from '../../../source/source-range';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface StringNode extends TokenNode {
  $: NodeType.STRING;
}

export function stringNode(range: SourceRange, text: String2): StringNode {
  return {
    $: NodeType.STRING,
    range,
    text,
  };
}

export function scanStringNode(context: ParserContext): StringNode | null {
  if (context.source.text[context.index] === STRING_QUOTE) {
    const nextQuoteIndex = context.source.text.indexOf(STRING_QUOTE, context.index + 1);
    const endSlice = nextQuoteIndex < 0 ? context.source.text.length : nextQuoteIndex + 1;
    const text = context.source.text.slice(context.index, endSlice);
    const range = context.getRange(text.length);

    return stringNode(range, text);
  }

  return null;
}
