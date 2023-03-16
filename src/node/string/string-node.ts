import { Integer, String2 } from '~/lib/core';
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

export function scanStringNode(text: String2, index: Integer): StringNode | UnexpectedNode | null {
  if (text[index] === QUOTE) {
    const nextQuoteIndex = text.indexOf(QUOTE, index + 1);
    if (nextQuoteIndex < 0) {
      return unexpectedNode(index, text.length - 1, text.slice(index, text.length));
    }
    return stringNode(index, nextQuoteIndex, text.slice(index, nextQuoteIndex + 1));
  }
  return null;
}
