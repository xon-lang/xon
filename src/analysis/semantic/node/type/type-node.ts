import { Node, NodeType } from '~/analysis/node';

export interface TypeNode extends Node {
  $: NodeType.TYPE;
}

export function typeNode(): TypeNode {
  return {
    $: NodeType.TYPE,
  };
}
