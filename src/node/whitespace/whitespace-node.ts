import { Char, Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface WhitespaceNode extends TokenNode {}

export function whitespaceNode(start: Integer, stop: Integer, text: String2): WhitespaceNode {
  return {
    type: NodeType.WHITESPACE,
    start,
    stop,
    text,
  };
}

const SPACE = ' ';
const TAB = '\t';

export function scanWhitespaceNode(chars: Char[], index: Integer): WhitespaceNode | null {
  if (chars[index] !== SPACE && chars[index] !== TAB) {
    return null;
  }
  for (let i = index + 1; i < chars.length; i++) {
    const nextChar = chars[i];
    if (nextChar !== SPACE && nextChar !== TAB) {
      return whitespaceNode(index, i - 1, chars.slice(index, i).join(''));
    }
  }
  return whitespaceNode(index, chars.length - 1, chars.slice(index, chars.length).join(''));
}
