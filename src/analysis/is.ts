import { Node, NodeType } from '~/analysis/node';

export function is<T extends Node = Node>(node: Node | null | undefined, ...nodeTypes: NodeType[]): node is T {
  if (!node || !nodeTypes.length) {
    return false;
  }

  const suffixes = node?.$.split(' ');

  return nodeTypes.every((x) => node.$ === x || suffixes?.includes(x));
}
