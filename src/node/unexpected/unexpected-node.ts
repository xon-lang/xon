import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface UnexpectedNode extends Node {}

export function unexpectedNode(startIndex: Integer, stopIndex: Integer): UnexpectedNode {
  return {
    type: NodeType.UNEXPECTED,
    startIndex,
    stopIndex,
  };
}
