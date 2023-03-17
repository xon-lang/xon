import { Node, NodeType } from '~/analysis/node';
import { String2 } from '~/lib/core';

export function is<T extends Node = Node>(node: Node, nodeType: NodeType | String2): node is T {
  const suffix = node?.type.split('-')[1];

  if (nodeType === NodeType.LEXICAL) {
    return suffix === NodeType.LEXICAL;
  }

  if (nodeType === NodeType.SYNTAX) {
    return suffix === NodeType.SYNTAX;
  }

  if (nodeType === NodeType.SEMANTIC) {
    return suffix === NodeType.SEMANTIC;
  }

  return node?.type === nodeType;
}
