import { Node, NodeType } from '~/analysis/node';
import { String2 } from '~/lib/core';

export function is<T extends Node = Node>(node: Node | null | undefined, nodeType: NodeType | String2): node is T {
  const suffixes = node?.$.split(' ');

  if (suffixes?.includes(nodeType)) {
    return true;
  }

  return node?.$ === nodeType;
}
