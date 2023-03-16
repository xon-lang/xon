import { Source } from '~/compiler/source/source';
import { Integer, String2 } from '~/lib/core';
import { Node, NodeType, TokenNode } from '~/node/node';

export interface WhitespaceNode extends TokenNode {}

export function whitespaceNode(start: Integer, stop: Integer, text: String2): WhitespaceNode {
  return {
    type: NodeType.WHITESPACE,
    start,
    stop,
    text
  };
}

const SPACE = ' ';
const TAB = '\t';

export function scanWhitespaceNode(source: Source, start: Integer, stop: Integer): WhitespaceNode | null {
  if (source.text[start] !== SPACE && source.text[start] !== TAB) {
    return null;
  }
  for (let i = start + 1; i <= stop; i++) {
    const nextChar = source.text[i];
    if (nextChar !== SPACE && nextChar !== TAB) {
      return whitespaceNode(start, i - 1, source.textBetweenIndices(start, i - 1));
    }
  }
  return whitespaceNode(start, stop, source.textBetweenIndices(start, stop));
}
