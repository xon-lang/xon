import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface StringNode extends Node {}

export function stringNode(startIndex: Integer, stopIndex: Integer): StringNode {
  return {
    type: NodeType.STRING,
    startIndex,
    stopIndex,
  };
}
