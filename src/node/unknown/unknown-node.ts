import { Integer, String2 } from '~/lib/core';
import { NodeType, TokenNode } from '~/node/node';

export interface UnknownNode extends TokenNode {
  type: NodeType.UNKNOWN;
}

export function unexpectedNode(start: Integer, stop: Integer, text: String2): UnknownNode {
  return {
    type: NodeType.UNKNOWN,
    start,
    stop,
    text,
  };
}
