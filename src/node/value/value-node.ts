import { Node, NodeType, TokenNode } from '~/analysis/node';
import { DataType } from '~/analysis/semantic/data-type';

export interface ValueNode extends Node {
  $: NodeType.VALUE;
  node: TokenNode;
  dataType: DataType;
}

export function typeNode(node: TokenNode, dataType: DataType): ValueNode {
  return {
    $: NodeType.VALUE,
    start: node.start,
    stop: node.stop,
    node,
    dataType,
  };
}
