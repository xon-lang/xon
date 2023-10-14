import { Node, NodeType } from '~/node/node';
import { DataType } from '~/node/semantic/data-type';
import { LexicalNode } from '../../lexical/lexical-node';

export interface ValueNode extends Node {
  $: NodeType.VALUE;
  node: LexicalNode;
  dataType: DataType;
}

export function typeNode(node: LexicalNode, dataType: DataType): ValueNode {
  return {
    $: NodeType.VALUE,
    start: node.start,
    stop: node.stop,
    node,
    dataType,
  };
}
