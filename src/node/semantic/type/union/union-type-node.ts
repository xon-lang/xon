import { NodeType, is } from '~/node/node';
import { TypeNode, parseTypeNode } from '~/node/semantic/type/type-node';
import { InfixNode } from '~/node/syntactic/infix/infix-node';

export const UNION_SPLITTER = '|';

export interface UnionTypeNode extends TypeNode {
  $: NodeType.TYPE_UNION;
  node: InfixNode | null;
  types: TypeNode[];
}

export function unionTypeNode(types: TypeNode[], node: InfixNode | null): UnionTypeNode {
  return {
    $: NodeType.TYPE_UNION,
    node,
    types,
  };
}

export function parseUnionTypeNode(node: InfixNode): UnionTypeNode {
  if (node.operator.text !== UNION_SPLITTER) {
    throw new Error('Not implemented');
  }

  const { left, right } = node;
  const leftType = parseTypeNode(left);
  const rightType = parseTypeNode(right);

  if (leftType === null || rightType === null) {
    throw new Error('Not implemented');
  }

  if (is<UnionTypeNode>(leftType, NodeType.TYPE_UNION)) {
    return unionTypeNode([...leftType.types, rightType], node);
  }

  return unionTypeNode([leftType, rightType], node);
}
