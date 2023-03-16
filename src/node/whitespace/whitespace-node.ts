import { Source } from '~/compiler/source/source';
import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface WhitespaceNode extends Node {}

export function whitespaceNode(startIndex: Integer, stopIndex: Integer): WhitespaceNode {
  return {
    type: NodeType.WHITESPACE,
    start: startIndex,
    stop: stopIndex,
  };
}

const SPACE = ' ';
const TAB = '\t';

export function scanWhitespaceNode(source: Source, startIndex: Integer, stopIndex: Integer): WhitespaceNode | null {
  if (source.text[startIndex] !== SPACE && source.text[startIndex] !== TAB) {
    return null;
  }
  for (let i = startIndex + 1; i <= stopIndex; i++) {
    const nextChar = source.text[i];
    if (nextChar !== SPACE && nextChar !== TAB) {
      return whitespaceNode(startIndex, i - 1);
    }
  }
  return whitespaceNode(startIndex, stopIndex);
}
