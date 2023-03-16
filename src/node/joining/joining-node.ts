import { Char, Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface JoiningNode extends TokenNode {
  type: NodeType.JOINING;
}

export function joiningNode(start: Integer, stop: Integer, text: String2): JoiningNode {
  return {
    type: NodeType.JOINING,
    start,
    stop,
    text,
  };
}

const JOINING = '\\';
const AFTER_JOINING = ' \t\n\r';

export function scanJoiningNode(chars: Char[], index: Integer): JoiningNode | null {
  if (chars[index] !== JOINING) {
    return null;
  }
  let nextIndex = index;
  for (let i = index + 1; i < chars.length; i++) {
    if (!AFTER_JOINING.includes(chars[i])) {
      break;
    }
    nextIndex = i;
  }
  return joiningNode(index, nextIndex, chars.slice(index, nextIndex + 1).join(''));
}
