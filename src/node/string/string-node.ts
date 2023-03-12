import { Integer, String2 } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface StringNode extends Node {}

export function stringNode(startIndex: Integer, stopIndex: Integer, text: String2): StringNode {
  return {
    type: NodeType.STRING,
    startIndex,
    stopIndex,
    text,
  };
}
