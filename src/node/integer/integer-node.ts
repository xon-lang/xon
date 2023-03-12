import { Integer, String2 } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface IntegerNode extends Node {}

export function integerNode(startIndex: Integer, stopIndex: Integer, text: String2): IntegerNode {
  return {
    nodeType: NodeType.INTEGER,
    startIndex,
    stopIndex,
    text,
  };
}
