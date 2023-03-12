import { Integer, String2 } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface JoiningNode extends Node {}

export function joiningNode(startIndex: Integer, stopIndex: Integer, text: String2): JoiningNode {
  return {
    nodeType: NodeType.JOINING,
    startIndex,
    stopIndex,
    text,
  };
}
