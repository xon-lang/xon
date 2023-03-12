import { Integer, String2 } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface IdNode extends Node {}

export function idNode(startIndex: Integer, stopIndex: Integer, text: String2): IdNode {
  return {
    nodeType: NodeType.ID,
    startIndex,
    stopIndex,
    text,
  };
}
