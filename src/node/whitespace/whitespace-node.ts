import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';
import { Source } from '~/parser/source/source';

export interface WhitespaceNode extends Node {}

export function whitespaceNode(startIndex: Integer, stopIndex: Integer): WhitespaceNode {
  return {
    type: NodeType.WHITESPACE,
    startIndex,
    stopIndex,
  };
}

const SPACE = ' ';
const TAB = '\t';

export function scanWhitespaceToken(source: Source, startIndex: Integer, stopIndex: Integer): WhitespaceNode | null {
  if (source.text[startIndex] === SPACE || source.text[startIndex] === TAB) {
    let nextIndex = startIndex;
    for (let i = startIndex + 1; i <= stopIndex; i++) {
      const nextChar = source.text[i];
      if (nextChar !== SPACE && nextChar !== TAB) {
        break;
      }
      nextIndex = i;
    }
    return whitespaceNode(startIndex, nextIndex);
  }
  return null;
}
