import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';
import { Source } from '~/parser/source/source';

export interface JoiningNode extends Node {}

export function joiningNode(startIndex: Integer, stopIndex: Integer): JoiningNode {
  return {
    type: NodeType.JOINING,
    startIndex,
    stopIndex,
  };
}

const LINE_JOINING = '\\';
const AFTER_LINE_JOINING = ' \t\n\r';

export function scanJoiningToken(source: Source, startIndex: Integer, stopIndex: Integer): JoiningNode | null {
  if (source.text[startIndex] !== LINE_JOINING) {
    return null;
  }
  let nextIndex = startIndex;
  for (let i = startIndex + 1; i <= stopIndex; i++) {
    if (!AFTER_LINE_JOINING.includes(source.text[i])) {
      break;
    }
    nextIndex = i;
  }
  return joiningNode(startIndex, nextIndex);
}
