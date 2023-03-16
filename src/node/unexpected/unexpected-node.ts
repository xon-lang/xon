import { Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

// todo rename to unknown
export interface UnexpectedNode extends TokenNode {}

export function unexpectedNode(start: Integer, stop: Integer, text: String2): UnexpectedNode {
  return {
    type: NodeType.UNEXPECTED,
    start,
    stop,
    text,
  };
}
