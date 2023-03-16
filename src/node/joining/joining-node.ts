import { Source } from '~/compiler/source/source';
import { Integer, String2 } from '~/lib/core';
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

export function scanJoiningNode(source: Source, start: Integer, stop: Integer): JoiningNode | null {
  if (source.text[start] !== JOINING) {
    return null;
  }
  let nextIndex = start;
  for (let i = start + 1; i <= stop; i++) {
    if (!AFTER_JOINING.includes(source.text[i])) {
      break;
    }
    nextIndex = i;
  }
  return joiningNode(start, nextIndex, source.textBetweenIndices(start, nextIndex));
}
