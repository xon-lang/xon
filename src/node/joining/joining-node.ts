import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface JoiningNode extends Node {}

export function joiningNode(startIndex: Integer, stopIndex: Integer): JoiningNode {
  return {
    type: NodeType.JOINING,
    startIndex,
    stopIndex,
  };
}
