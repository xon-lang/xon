import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { CHAR_QUOTE } from '~/parser/util/operators';
import { Type } from '~/type/type';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface CharNode extends TokenNode {
  $: NodeType.CHAR;
  type: Type;
}

export function charNode(text: String2): Partial<CharNode> {
  return {
    $: NodeType.CHAR,
    text,
  };
}

export function scanCharNode({ index, source }: ParserContext): Partial<CharNode> | null {
  if (source.text[index] === CHAR_QUOTE) {
    const nextQuoteIndex = source.text.indexOf(CHAR_QUOTE, index + 1);

    if (nextQuoteIndex < 0) {
      return charNode(source.text.slice(index, source.text.length));
    }

    return charNode(source.text.slice(index, nextQuoteIndex + 1));
  }

  return null;
}
