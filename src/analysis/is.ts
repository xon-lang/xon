import { Node, NodeType } from '~/analysis/node';
import { String2 } from '~/lib/core';

export function is<T extends Node = Node>(node: Node | null | undefined, nodeType: NodeType | String2): node is T {
  const suffix = node?.$.split('-')[1];

  if (suffix === nodeType) {
    return true;
  }

  return node?.$ === nodeType;
}
