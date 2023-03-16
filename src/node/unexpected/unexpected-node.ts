import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

// todo rename to unknown
export interface UnexpectedNode extends Node {}

export function unexpectedNode(startIndex: Integer, stopIndex: Integer): UnexpectedNode {
  return {
    type: NodeType.UNEXPECTED,
    start: startIndex,
    stop: stopIndex,
  };
}
