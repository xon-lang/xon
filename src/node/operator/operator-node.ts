import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface OperatorNode extends Node {}

export function operatorNode(startIndex: Integer, stopIndex: Integer): OperatorNode {
  return {
    type: NodeType.OPERATOR,
    startIndex,
    stopIndex,
  };
}
