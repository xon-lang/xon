import { Integer, String2 } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface OperatorNode extends Node {}

export function operatorNode(startIndex: Integer, stopIndex: Integer, text: String2): OperatorNode {
  return {
    nodeType: NodeType.OPERATOR,
    startIndex,
    stopIndex,
    text,
  };
}
