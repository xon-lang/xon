import { Node, NodeType } from '~/node/node';

export function is<T extends Node = Node>(node: Node | null | undefined, nodeType: NodeType): node is T {
  return node?.$ === nodeType;
}
