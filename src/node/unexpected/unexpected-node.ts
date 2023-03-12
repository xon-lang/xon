import { Integer, String2 } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface UnexpectedNode extends Node {}

export function unexpectedNode(startIndex: Integer, stopIndex: Integer, text: String2): UnexpectedNode {
  return {
    nodeType: NodeType.UNEXPECTED,
    startIndex,
    stopIndex,
    text,
  };
}
