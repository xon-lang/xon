import { Node, NodeType } from '~/node/node';
import { DataType } from '~/node/syntactic/data-type';
import { LexicalNode } from '../../lexical/lexical-node';

export interface TypeNode extends Node {
  $: NodeType.TYPE;
  node: LexicalNode;
  dataType: DataType;
}

export function typeNode(node: LexicalNode, dataType: DataType): TypeNode {
  return {
    $: NodeType.TYPE,
    start: node.start,
    stop: node.stop,
    node,
    dataType,
  };
}
