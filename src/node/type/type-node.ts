import { DataType } from '~/analysis/semantic/data-type';
import { Node, NodeType, TokenNode } from '~/node/node';

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
