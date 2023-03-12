import { Integer, String2 } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface WhitespaceNode extends Node {}

export function whitespaceNode(startIndex: Integer, stopIndex: Integer, text: String2): WhitespaceNode {
  return {
    type: NodeType.WHITESPACE,
    startIndex,
    stopIndex,
    text,
  };
}
