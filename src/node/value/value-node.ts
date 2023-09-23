import { DataType } from '~/analysis/semantic/data-type';
import { Node, NodeType, TokenNode } from '~/node/node';

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
