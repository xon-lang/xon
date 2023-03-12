import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';
import { Source } from '~/parser/source/source';

export interface CloseNode extends Node {}

export function closeNode(startIndex: Integer, stopIndex: Integer): CloseNode {
  return {
    type: NodeType.CLOSE,
    startIndex,
    stopIndex,
  };
}

const CLOSE = '}])';

export function scanOpenNode(source: Source, startIndex: Integer, stopIndex: Integer): CloseNode | null {
  if (CLOSE.includes(source.text[startIndex])) {
    return closeNode(startIndex, startIndex);
  }
  return null;
}
