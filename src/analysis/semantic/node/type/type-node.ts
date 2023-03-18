import { Node, NodeType } from '~/analysis/node';

export interface TypeNode extends Node {
  type: NodeType.TYPE;
}

export function typeNode(): TypeNode {
  return {
    type: NodeType.TYPE,
  };
}
