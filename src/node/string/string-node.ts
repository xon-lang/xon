import { Char, Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';
import { UnexpectedNode, unexpectedNode } from '~/node/unexpected/unexpected-node';

export interface StringNode extends TokenNode {
  type: NodeType.STRING;
}

export function stringNode(start: Integer, stop: Integer, text: String2): StringNode {
  return {
    type: NodeType.STRING,
    start,
    stop,
    text,
  };
}

const QUOTE = "'";

export function scanStringNode(chars: Char[], index: Integer): StringNode | UnexpectedNode | null {
  if (chars[index] === QUOTE) {
    const nextQuoteIndex = chars.indexOf(QUOTE, index + 1);
    if (nextQuoteIndex < 0) {
      return unexpectedNode(index, chars.length - 1, chars.slice(index, chars.length).join(''));
    }
    return stringNode(index, nextQuoteIndex, chars.slice(index, nextQuoteIndex + 1).join(''));
  }
  return null;
}
