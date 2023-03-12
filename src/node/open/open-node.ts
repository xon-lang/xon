import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';
import { Source } from '~/parser/source/source';

export interface OpenNode extends Node {}

export function openNode(startIndex: Integer, stopIndex: Integer): OpenNode {
  return {
    type: NodeType.OPEN,
    startIndex,
    stopIndex,
  };
}

const OPEN = '([{';

export function scanOpenNode(source: Source, startIndex: Integer, stopIndex: Integer): OpenNode | null {
  if (OPEN.includes(source.text[startIndex])) {
    return openNode(startIndex, startIndex);
  }
  return null;
}