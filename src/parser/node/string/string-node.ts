import { String2 } from '~/lib/core';
import { ParserContext } from '~/parser/parser-context';
import { QUOTE } from '~/parser/util/operators';
import { Type } from '~/type/type';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface StringNode extends TokenNode {
  $: NodeType.STRING;
  type: Type;
}

export function stringNode(text: String2): Partial<StringNode> {
  return {
    $: NodeType.STRING,
    text,
  };
}

export function scanStringNode({ index, source }: ParserContext): Partial<StringNode> | null {
  if (source.text[index] === QUOTE) {
    const nextQuoteIndex = source.text.indexOf(QUOTE, index + 1);

    if (nextQuoteIndex < 0) {
      return stringNode(source.text.slice(index, source.text.length));
    }

    return stringNode(source.text.slice(index, nextQuoteIndex + 1));
  }

  return null;
}
