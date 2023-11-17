import { String2 } from '~/lib/core';
import { Parser } from '~/parser/parser';
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

const QUOTE = '\'';

export function scanStringNode({ index, text }: Parser): Partial<StringNode> | null {
  if (text[index] === QUOTE) {
    const nextQuoteIndex = text.indexOf(QUOTE, index + 1);

    if (nextQuoteIndex < 0) {
      return stringNode(text.slice(index, text.length));
    }

    return stringNode(text.slice(index, nextQuoteIndex + 1));
  }

  return null;
}
