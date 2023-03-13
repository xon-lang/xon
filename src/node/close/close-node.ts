import { Source } from '~/compiler/source/source';
import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface CloseNode extends Node {}

export function closeNode(startIndex: Integer, stopIndex: Integer): CloseNode {
  return {
    type: NodeType.CLOSE,
    startIndex,
    stopIndex,
  };
}

const CLOSE = '}])';

export function scanCloseNode(source: Source, startIndex: Integer, stopIndex: Integer): CloseNode | null {
  if (CLOSE.includes(source.text[startIndex])) {
    return closeNode(startIndex, startIndex);
  }
  return null;
}
