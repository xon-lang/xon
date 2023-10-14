import { NodeType, is } from '~/node/node';
import { TypeNode, parseTypeNode } from '~/node/semantic/type/type-node';
import { InfixNode } from '~/node/syntactic/infix/infix-node';

export const INTERSECTION_SPLITTER = '&';

export interface IntersectionTypeNode extends TypeNode {
  $: NodeType.TYPE_INTERSECTION;
  node: InfixNode | null;
  types: TypeNode[];
}

export function intersectionTypeNode(types: TypeNode[], node: InfixNode | null): IntersectionTypeNode {
  return {
    $: NodeType.TYPE_INTERSECTION,
    node,
    types,
  };
}

export function parseIntersectionTypeNode(node: InfixNode): IntersectionTypeNode {
  if (node.operator.text !== INTERSECTION_SPLITTER) {
    throw new Error('Not implemented');
  }

  const { left, right } = node;
  const leftType = parseTypeNode(left);
  const rightType = parseTypeNode(right);

  if (leftType === null || rightType === null) {
    throw new Error('Not implemented');
  }

  if (is<IntersectionTypeNode>(leftType, NodeType.TYPE_INTERSECTION)) {
    return intersectionTypeNode([...leftType.types, rightType], node);
  }

  return intersectionTypeNode([leftType, rightType], node);
}
