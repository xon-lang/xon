import { Integer } from '~/lib/core';
import { Node, NodeType } from '~/node/node';

export interface IdNode extends Node {}

export function idNode(startIndex: Integer, stopIndex: Integer): IdNode {
  return {
    type: NodeType.ID,
    startIndex,
    stopIndex,
  };
}
