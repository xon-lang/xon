import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface IntegerNode extends Node {}

export function integerNode(startIndex: Integer, stopIndex: Integer): IntegerNode {
  return {
    type: NodeType.INTEGER,
    startIndex,
    stopIndex,
  };
}
