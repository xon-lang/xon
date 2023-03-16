import { Source } from '~/compiler/source/source';
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

export function scanStringNode(source: Source, start: Integer, stop: Integer): StringNode | UnexpectedNode | null {
  if (source.text[start] === QUOTE) {
    const nextQuoteIndex = source.text.indexOf(QUOTE, start + 1);
    if (nextQuoteIndex < 0 || nextQuoteIndex > stop) {
      return unexpectedNode(start, stop, source.textBetweenIndices(start, stop));
    }
    return stringNode(start, nextQuoteIndex, source.textBetweenIndices(start, nextQuoteIndex));
  }
  return null;
}
