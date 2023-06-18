import { Node, NodeType } from '~/analysis/node';

export function is<T extends Node = Node>(node: Node, nodeType: NodeType): node is T {
  return node.$ === nodeType;
}
