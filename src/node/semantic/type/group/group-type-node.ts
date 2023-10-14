import { TypeNode, parseTypeNode } from '~/node/semantic/type/type-node';
import { GroupNode } from '~/node/syntactic/group/group-node';

export function parseGroupTypeNode({ items }: GroupNode): TypeNode | null {
  if (items.length > 2) {
    throw new Error('Not implemented');
  }

  if (items.length === 2) {
    const { statements } = items[1];

    if (statements.length > 1 || statements[0].nodes.length > 1) {
      throw new Error('Not implemented');
    }
  }

  if (items[0].statements.length > 1 || items[0].statements[0].nodes.length > 1) {
    throw new Error('Not implemented');
  }

  const node = items[0].statements[0].nodes[0];

  return parseTypeNode(node);
}
