import { Node, NodeType } from '~/analysis/node';
import { DataType } from '~/analysis/semantic/data-type';

export interface ValueNode extends Node {
  $: NodeType.VALUE;
  node: Node;
  dataType: DataType;
}

export function typeNode(node: Node, dataType: DataType): ValueNode {
  return {
    $: NodeType.VALUE,
    node,
    dataType,
  };
}
