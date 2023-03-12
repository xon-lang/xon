import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface WhitespaceNode extends Node {}

export function whitespaceNode(startIndex: Integer, stopIndex: Integer): WhitespaceNode {
  return {
    type: NodeType.WHITESPACE,
    startIndex,
    stopIndex,
  };
}
