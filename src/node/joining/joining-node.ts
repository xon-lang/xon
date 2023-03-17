import { LexicalNode } from '~/analysis/lexical/LexicalNode';
import { NodeType } from '~/analysis/Node';
import { Integer, String2 } from '~/lib/core';

export interface JoiningNode extends LexicalNode {
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

export function scanJoiningNode(text: String2, index: Integer): JoiningNode | null {
  if (text[index] !== JOINING) {
    return null;
  }
  let nextIndex = index;
  for (let i = index + 1; i < text.length; i++) {
    if (!AFTER_JOINING.includes(text[i])) {
      break;
    }
    nextIndex = i;
  }
  return joiningNode(index, nextIndex, text.slice(index, nextIndex + 1));
}
