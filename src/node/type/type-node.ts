import { Node, NodeType, TokenNode } from '~/analysis/node';
import { DataType } from '~/analysis/semantic/data-type';

export interface TypeNode extends Node {
  $: NodeType.TYPE;
  node: TokenNode;
  dataType: DataType;
}

export function typeNode(node: TokenNode, dataType: DataType): TypeNode {
  return {
    $: NodeType.TYPE,
    start: node.start,
    stop: node.stop,
    node,
    dataType,
  };
}
