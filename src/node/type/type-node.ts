import { DataType } from '~/analysis/semantic/data-type';
import { Node, NodeType } from '~/node/node';
import { LexicalNode } from '../lexical/lexical-node';

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
